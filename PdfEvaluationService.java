package com.example.Student_portal.services;

import com.example.Student_portal.model.*;
import com.example.Student_portal.repository.QuestionRepository;
import com.example.Student_portal.repository.UserRepository;
import com.example.Student_portal.repository.UserResultRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.apache.tika.Tika;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PdfEvaluationService {

    private final UserResultRepository resultRepo;
    private final UserRepository userRepo;
    private final QuestionRepository questionRepo;

    @Value("${groq.api.key}")
    private String groqApiKey;

    private final Tika tika = new Tika();

    public UserResult evaluatePdf(Long userId, MultipartFile pdfFile) throws Exception {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));


        String pdfText = tika.parseToString(pdfFile.getInputStream());
        String[] lines = pdfText.split("\\r?\\n");

        int score = 0;
        StringBuilder answersJson = new StringBuilder("{\"answers\":[");

        String questionText = null;
        List<String> options = new ArrayList<>();
        String selected = null;

        for (String line : lines) {
            line = line.trim();
            if (line.isEmpty()) continue;


            if (line.startsWith("Question")) {
                questionText = line.substring(line.indexOf(":") + 1).trim();
                options.clear();
            }
            else if (line.matches("[A-D]\\).*")) {
                options.add(line.substring(2).trim());
            }

            else if (line.startsWith("Selected Answer:")) {
                selected = line.substring(line.indexOf(":") + 1).trim();


                if (selected.isEmpty() || selected.equals("_______")) {
                    selected = "Not Attempted";
                }


                String optionsText = String.join(", ", options);
                String prompt = "You are a teacher. Determine the correct answer for this multiple-choice question.\n" +
                        "Question: " + questionText + "\n" +
                        "Options: " + optionsText + "\n" +
                        "Answer only with the correct option letter (A/B/C/D).";

                String correctOption = callGroqLLM(prompt).trim().toUpperCase();
                if (correctOption.isEmpty() || !correctOption.matches("[A-D]")) {
                    correctOption = null;
                }


                boolean correct = false;
                if (!selected.equalsIgnoreCase("Not Attempted") && correctOption != null) {
                    correct = selected.equalsIgnoreCase(correctOption);
                    if (correct) score++;
                }


                Question q = Question.builder()
                        .questionText(questionText)
                        .optionA(options.size() > 0 ? options.get(0) : null)
                        .optionB(options.size() > 1 ? options.get(1) : null)
                        .optionC(options.size() > 2 ? options.get(2) : null)
                        .optionD(options.size() > 3 ? options.get(3) : null)
                        .selectedAnswer(selected)
                        .correctAnswer(correctOption)
                        .build();
                questionRepo.save(q);


                answersJson.append("{\"question\":\"").append(questionText)
                        .append("\",\"selected\":\"").append(selected)
                        .append("\",\"correct\":\"").append(correctOption == null ? "" : correctOption)
                        .append("\"},");


                questionText = null;
                options.clear();
                selected = null;
            }
        }

        if (answersJson.charAt(answersJson.length() - 1) == ',') {
            answersJson.deleteCharAt(answersJson.length() - 1);
        }
        answersJson.append("]}");

        UserResult result = UserResult.builder()
                .user(user)
                .score(score)
                .answersJson(answersJson.toString())
                .build();

        return resultRepo.save(result);
    }


    private String callGroqLLM(String prompt) {
        try {
            HttpClient client = HttpClient.newHttpClient();

            ObjectMapper mapper = new ObjectMapper();
            ObjectNode root = mapper.createObjectNode();
            root.put("model", "llama-3.1-8b-instant");
            root.put("temperature", 0);
            root.put("stream", false);

            ArrayNode messages = mapper.createArrayNode();

            ObjectNode systemMsg = mapper.createObjectNode();
            systemMsg.put("role", "system");
            systemMsg.put("content", "You are a teacher.");
            messages.add(systemMsg);

            ObjectNode userMsg = mapper.createObjectNode();
            userMsg.put("role", "user");
            userMsg.put("content", prompt);
            messages.add(userMsg);

            root.set("messages", messages);

            String jsonBody = mapper.writeValueAsString(root);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.groq.com/openai/v1/chat/completions"))
                    .header("Authorization", "Bearer " + groqApiKey)
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                    .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

            System.out.println("Groq Status: " + response.statusCode());
            System.out.println("Groq Response: " + response.body());

            if (response.statusCode() != 200) {
                return "";
            }

            JsonNode rootNode = mapper.readTree(response.body());
            return rootNode.path("choices").get(0).path("message").path("content").asText();

        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }
}
