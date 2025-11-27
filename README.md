# 📧 Email Writer SB

An AI-powered email reply generator that helps you craft professional responses instantly using Google's Gemini AI

## 📑 Table of Contents

- [Demo](#demo)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)

## 📹 Demo

https://github.com/user-attachments/assets/6f21ed75-9b4f-4598-bcb4-1d98ec49a1de


## ✨ Key Features

- **AI-Powered Email Generation**: Generate professional email replies using Google's Gemini AI model
- **Multiple Tone Options**: Choose from various tones including casual, friendly, professional, formal, and concise
- **Copy to Clipboard**: Easily copy generated replies with one click
- **Real-time Generation**: Fast and responsive email reply generation
- **Simple Interface**: Clean and intuitive user interface for seamless experience

## 💻 Technology Stack

### Frontend

- React 19
- Vite
- JavaScript (ES6+)

### Backend

- Java 21
- Spring Boot 4.0
- Spring WebFlux (Reactive)
- Lombok
- Maven

### AI & APIs

- Google Gemini API (Gemini 2.5 Flash)

## 🚀 Getting Started

### Prerequisites

- Java 21 or higher
- Node.js and npm
- Maven
- Google Gemini API key

### Backend Setup

1. Navigate to the backend directory:
```bash
cd email-writer-backend
```

2. Configure your Gemini API key in `src/main/resources/application.properties`:
```properties
gemini.api.key=YOUR_GEMINI_API_KEY
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd email-writer-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

### Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Paste the original email content in the text area
3. Select your desired tone from the dropdown
4. Click "Generate Reply" to get your AI-generated email response
5. Copy the generated reply to your clipboard with one click


