
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './questions.html',
  styleUrls: ['./questions.css']
})
export class Questions {
  questions: string[] = ['What is Java?', 'Explain OOP concepts', 'Define encapsulation'];
  newQuestion: string = '';

  addQuestion() {
    if (this.newQuestion.trim()) {
      this.questions.push(this.newQuestion);
      this.newQuestion = '';
    }
  }

  deleteQuestion(question: string) {
    this.questions = this.questions.filter(q => q !== question);
  }
}
