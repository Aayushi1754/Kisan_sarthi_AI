🌱 Kisan Sarthi AI

Kisan Sarthi AI is a full-stack, AI-powered agricultural assistance platform designed to provide farmers with accessible agricultural information through a simple and user-friendly web application.
The project combines a React frontend, FastAPI backend, PostgreSQL database, JWT authentication, Google OAuth 2.0, and Gemini AI to provide a complete full-stack application.

🚀 Live Application
Frontend:
https://kisan-sarthi-ai-silk.vercel.app⁠
Backend:
https://kisan-sarthi-ai.onrender.com⁠
API Documentation:
https://kisan-sarthi-ai.onrender.com/docs⁠

🎯 Problem Statement
Farmers often need quick access to information related to crops, farming practices, soil, pests, and other agricultural concerns. Finding relevant and understandable information can sometimes be difficult.
Kisan Sarthi AI provides a centralized platform where users can:
Access agricultural information
Explore farming-related tools
Ask agriculture-related questions to an AI assistant
Create and manage farming features
Securely register and log in
Access a protected farmer dashboard
The AI assistant is specifically designed to focus on agriculture-related questions, with emphasis on farming in Uttarakhand, India.

✨ Key Features:

🔐 Authentication
User registration
Email/password login
JWT-based authentication
Google OAuth 2.0 login
Protected dashboard routes

🌱 Farming Features
View farming features
Add new farming features
Update existing features
Delete features
Persistent storage using PostgreSQL

🤖 AI Agricultural Assistant
AI-powered agricultural chatbot
Answers agriculture-related questions
Focuses on farming in Uttarakhand, India
Uses Gemini API
Rejects unrelated questions politely

🎨 User Interface
Responsive design
React-based component architecture
Tailwind CSS styling
Dark mode
Toast notifications
Loading states
Protected routes

System Architecture:
┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ React + Vite        │
                    │ Frontend            │
                    │                     │
                    │ Tailwind CSS        │
                    │ React Router        │
                    └──────────┬──────────┘
                               │
                         HTTP / REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │ FastAPI Backend     │
                    │                     │
                    │ Authentication      │
                    │ CRUD APIs           │
                    │ AI API              │
                    └──────┬───────┬──────┘
                           │       │
                 ┌─────────┘       └──────────┐
                 ▼                            ▼
        ┌─────────────────┐          ┌─────────────────┐
        │ PostgreSQL      │          │ Gemini AI API   │
        │ Supabase        │          │                 │
        └─────────────────┘          └─────────────────┘
                           │
                           ▼
                    Google OAuth 2.0

🛠️ Technology Stack
Technology
1) React for Frontend
(Component-based UI development)
2) Vite for Frontend tooling
(Fast development and build process)
3) Tailwind CSS for Styling
(Responsive and rapid UI development)
4) React Router for Routing
(Client-side navigation)
5) FastAPI for Backend
(High-performance Python API framework)
6) SQLAlchemy for ORM
(Database interaction through Python)
7) PostgreSQL for Database
(Structured relational data storage)
8) Supabase for Database hosting
(Managed PostgreSQL infrastructure)
9) JWT for Authentication
(Token-based authentication)
10) Google OAuth 2.0 for Authentication
(Google-based login)
11) Gemini API for AI
(Agricultural question answering)
12) Vercel for Frontend hosting
(Deployment of React application)
13) Render for Backend hosting
(Deployment of FastAPI application)

🖥️ Frontend

The frontend is built using React with Vite.
Main frontend technologies
React
Vite
Tailwind CSS
React Router

Frontend responsibilities
The frontend handles:
User interface
Navigation
Authentication screens
Dashboard
CRUD interface
AI chat interface
Dark mode
API communication
Protected routes

⚙️ Backend
The backend is built using FastAPI.
FastAPI is responsible for:
REST API development
Authentication
User registration and login
JWT token generation and verification
Google OAuth
Database operations
Feature CRUD operations
AI request processing
CORS configuration
Rate limiting

🗄️ Database
The project uses:
PostgreSQL hosted on Supabase
Why PostgreSQL?
PostgreSQL was selected because:
It is a powerful relational database
The application contains structured data
It supports relationships between application entities
It integrates well with SQLAlchemy
It provides reliable persistent storage
SQL is also directly relevant to database concepts used in academic coursework

📊 Database Schema

Feature Table
Field       Type      Description
id          Integer   Primary Key
title       String    Feature title
description String    Feature description
image       String    Feature image URL

User Table
Field       Type      Description
id          Integer   Primary Key
email       String    User email
hashed_pwd String     Securely hashed password

Note: Keep the User table fields exactly consistent with your actual models.py. If your model contains additional fields, add them here.

🤖 AI Feature
The main AI feature of Kisan Sarthi AI is an AI-powered agricultural chatbot.
Use Case
The chatbot helps users ask questions related to agriculture and farming.
Examples:
Which crops are suitable for Uttarakhand?

How can I control pests naturally?

What should I do if my crop is affected by disease?

AI Workflow
User Question
      ↓
React AI Chat Interface
      ↓
POST /api/ai/chat
      ↓
FastAPI Backend
      ↓
Agricultural Context / Prompt
      ↓
Gemini API
      ↓
AI Response
      ↓
React Interface

The backend restricts the assistant to agriculture-related questions and focuses its responses on farming in Uttarakhand, India.

🔐 Authentication
The application supports two authentication mechanisms.
1. JWT Authentication
The application uses JSON Web Tokens for:
Login
Protected API requests
User authentication
Dashboard access
The JWT token is generated after successful login and used when accessing protected endpoints.
2. Google OAuth 2.0
Users can also authenticate using their Google account.

OAuth Flow
User
 ↓
Click "Continue with Google"
 ↓
Google Authentication
 ↓
Google Authorization
 ↓
OAuth Callback
 ↓
FastAPI Backend
 ↓
JWT Token
 ↓
Frontend
 ↓
Authenticated User

🔌 API Documentation
The backend provides interactive API documentation using FastAPI Swagger UI.
Live API Documentation:
https://kisan-sarthi-ai.onrender.com/docs⁠
Important APIs
Method     Endpoint          Description
GET          /                Backend welcome route
GET        /health            Backend health check
GET       /api/features       Get all features
GET      /api/features/{id}   Get feature by ID
GET     /api/features/search  Search feature
POST     /api/features        Create feature
PUT     /api/features/{id}    Update feature
DELETE  /api/features/{id}    Delete feature
POST    /api/auth/register    Register user
POST   /api/auth/login        Login user
GET    /api/profile           Get authenticated profile
GET    /auth/google           Google OAuth login
GET    /auth/google/callback  Google OAuth callback
POST   /api/ai/chat           AI agricultural assistant

🧪 API Testing
The APIs can be tested through FastAPI's interactive Swagger documentation.
Swagger UI
https://kisan-sarthi-ai.onrender.com/docs⁠
The Swagger interface allows API endpoints to be tested directly by sending requests and viewing responses.
📸 Screenshots

## Home Page
![Home Page] (screenshots/home.png)
## Login Page
![Login Page] (screenshots/login.png)
## Farmer Dashboard
![Dashboard Page] (screenshots/dashboard.png)
## AI Chat
![AI CHAT] (screenshots/ai-chat.png)

💻 Local Setup

Prerequisites
Make sure you have installed:
Python
Node.js
npm
PostgreSQL/Supabase account

1. Clone the Repository
git clone https://github.com/Aayushi1754/Kisan_sarthi_AI
cd Kisan-Sarthi

⚙️ Backend Setup

Navigate to the backend:
cd backend

Create a virtual environment:
python -m venv venv

Activate it on Windows:
venv\Scripts\activate

Install dependencies:
pip install -r requirements.txt

Start the backend:
uvicorn main:app --reload

Backend will run at:
http://127.0.0.1:8000

Swagger documentation:
http://127.0.0.1:8000/docs

🎨 Frontend Setup
From the frontend/project root:
npm install

Start the development server:
npm run dev

Frontend will run at:
http://localhost:5173


🗃️ Database Setup

1) Create a PostgreSQL database using Supabase.
2) Obtain the PostgreSQL connection string.
3) Add the connection string to .env.
4) Configure the backend to use the database.
5) Start the FastAPI server.
The backend uses SQLAlchemy to communicate with PostgreSQL.

🌐 Deployment
The application is deployed using separate hosting services for frontend and backend.
Frontend
Hosting: Vercel
Live URL:
https://kisan-sarthi-ai-silk.vercel.app⁠�
Backend
Hosting: Render
Live URL:
https://kisan-sarthi-ai.onrender.com⁠�
Database
Hosting: Supabase
Database: PostgreSQL
🔗 Live URLs
Resource                  URL
🌐 Live Frontend         https://kisan-sarthi-ai-silk.vercel.app⁠�
⚙️ Live Backend          https://kisan-sarthi-ai.onrender.com⁠�
📖 API Documentation     https://kisan-sarthi-ai.onrender.com/docs⁠�
💻 GitHub Repository     https://github.com/Aayushi1754/Kisan_sarthi_AI
🎥 Demo Video            https://youtu.be/T1KdC51FsBU

⚠️ Known Limitations
The application currently uses free-tier hosting services.

Render
The Render free tier can spin down after a period of inactivity.
The first request after inactivity may take some time while the backend wakes up.
AI requests may therefore occasionally experience additional latency.

AI
AI responses depend on the availability and limitations of the Gemini API.
The AI assistant is intended for agricultural information and should not replace professional agricultural advice.

Free-tier infrastructure
Free-tier services may have usage, performance, or request limitations.

🔮 Future Improvements
Possible future improvements include:
🌾 Crop disease detection using deep learning
🖼️ Image-based crop disease classification
🌦️ Weather API integration
🌱 Soil health analysis
📊 Personalized crop recommendations
🗣️ Voice-based agricultural assistant
🌐 Multilingual support for Indian regional languages
📱 Dedicated mobile application
📈 Farmer analytics dashboard
🤖 More advanced NLP-based agricultural assistant

🎥 Demo Video
YouTube Demo: https://youtu.be/T1KdC51FsBU

The demo video demonstrates:
Application introduction
User registration/login
Google OAuth login
Farmer dashboard
CRUD operations
Database persistence
AI chatbot
Backend/API workflow
Brief code walkthrough
Live deployment

👨‍💻 Author
Aayushi Goyal
Graphic Era (Deemed to be University)
TBI-GEU Internship

⭐ Acknowledgement
This project was developed as part of the TBI-GEU Internship Program.

