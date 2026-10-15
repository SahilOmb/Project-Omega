🧠 AI-Powered Question Paper Generator & Grader

AI-Powered Question Paper Generator & Grader is an enterprise-grade, full-stack web application that leverages local Large Language Models to automate educational assessments. The system allows users to dynamically generate tailored question papers based on specific topics, difficulties, and lengths, while providing an automated, AI-driven grading engine to evaluate submitted answers with granular accuracy.
By integrating a decoupled client-server architecture built on Java Spring Boot, Angular, and MySQL, the application connects seamlessly to a local Ollama instance orchestrating the Gemma LLM. This ensures data privacy, low-latency processing, and secure text generation without relying on costly external APIs. 🚀 🎓

🚀 Key Architectural Features

• Local AI Execution Layer: Connects to Ollama locally running Gemma LLM, passing strict prompt contexts to ensure valid question schemas and objective answer scoring.
• Automated AI Grading Engine: Evaluates descriptive textual answers against generated criteria keys, rendering context-aware, structured scoring matrices and analytical reports.
• Dynamic PDF Distribution Engine: Compiles generated exams, analytics dashboards, and evaluation results directly into downloadable PDFs via Spring Boot service layers.
• Robust Angular Navigation & Forms: Implements deep reactive form validation across user states (login, register, user-update) paired with an optimization-focused Server-Side Rendering (SSR) pipeline.

💻 Technical Infrastructure Stack

• Backend Engine: Java 17+, Spring Boot, Spring Data JPA, Hibernate, Apache Maven
• Frontend UI Client: Angular 17+, TypeScript, RxJS, HTML5, CSS3/SCSS
• Database Engine: MySQL Relational Database (persistent relational mapping)
• AI Orchestration: Ollama API Gateway Instance (gemma LLM deployment models)


 📂 Project Structure

```text
codebase/
├── backend/                                       # Java Spring Boot API Framework
│   ├── AuthController.java                        # User authorization mapping endpoints
│   ├── AuthService.java                           # Token validation & credential processing logic
│   ├── PdfController.java                         # Document export & management REST routes
│   ├── PdfEvaluationService.java                  # Specialized PDF analytical service logic
│   ├── QuestionController.java                    # Questionnaire database endpoints
│   ├── QuestionService.java                       # Quiz mechanics & data validation logic
│   ├── ResultController.java                      # Grade calculation & historical record routes
│   └── ResultService.java                         # Exam grading processing service metrics
│
├── frontend/                                      # Angular 17+ Enterprise SPA Client
│   ├── src/app/                                   # Application modules & features
│   │   ├── login/                                 # Secure session entry portal
│   │   │   ├── login.html / login.css             # Component template views
│   │   │   └── login.ts / login.spec.ts           # Component logic & test spec
│   │   ├── register/                              # User onboarding system
│   │   │   ├── register.html / register.css       # Layout design blueprints
│   │   │   └── register.ts / register.spec.ts     # Component logic & form control
│   │   ├── dashboard/                             # Personalized client analytics desk
│   │   │   ├── dashboard.html / dashboard.css     # Data reporting view templates
│   │   │   └── dashboard.ts / dashboard.spec.ts   # Core administrative runtime script
│   │   ├── user-update/                           # Profile preferences management
│   │   │   ├── user-update.html / .css            # Profile styling fields layout
│   │   │   └── user-update.ts / .spec.ts          # Core profile editing engine
│   │   ├── welcome/                               # Standard landing component core
│   │   │   ├── welcome.html / welcome.css         # Informational module templates
│   │   │   └── welcome.ts / welcome.spec.ts       # Action routing event scripts
│   │   │
│   │   ├── app.html / app.css                     # Primary single page client view shell
│   │   ├── app.ts / app.spec.ts                   # Shell bootstrapping container configuration
│   │   ├── app.config.ts / .config.server.ts      # Client/SSR hydration platform interceptors
│   │   ├── app.routes.ts / .routes.server.ts      # Framework application routing protocols
│   │   └── user.ts / user.spec.ts                 # Shared user structural model definitions
│   │
│   ├── Welcome.html / Welcome.css                 # Root static application marketing landing layout
│   ├── angular.json                               # Workspace workspace compilation schema settings
│   ├── package.json / package-lock.json           # Node engine build runtime registry entries
│   ├── tsconfig.json                              # Main TypeScript compiler instruction layout
│   ├── tsconfig.app.json / tsconfig.spec.json     # App & unit test specific code rule overrides
│   └── .editorconfig                              # Standard automated text editor styling rule
│
├── .gitignore                                     # Repository version control filter index
└── README.md                                      # Comprehensive project profile handbook
```



🚀 Deployment Instructions


1. Environment Preparation

• Install the Java Development Kit (JDK 17 or higher) on the production server.
• Install Node.js (v18 or higher) along with the npm package manager.
• Set up a production-ready MySQL database instance on your cloud provider or local server.
• Install and configure Ollama on the server machine, ensuring the Gemma LLM model is fully pulled and cached locally.

2. Database Initialization

• Log into your MySQL server and create a dedicated production database schema matching your application name.
• Ensure user privileges are properly granted to allow the application server to perform migrations and persistent data changes.

3. Backend Deployment

• Inject production credentials (database host URL, user identity, password tokens, and the Ollama endpoint gateway) securely using System Environment Variables instead of hardcoding them into the configuration file.
• Compile your Spring Boot project into a production-ready execution package using your integrated build automation manager.
• Run the resulting package as a background service or daemon process on the host server.

4. Frontend Deployment

• Navigate to your UI client directory and fetch all required package dependencies.
• Run the framework build compilation engine to generate highly optimized, minified static distribution assets.
• Serve the resulting static production files using a high-performance web server or reverse proxy like Nginx or Apache.
