# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)

---

# Week 4 - FastAPI Backend

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install fastapi uvicorn

uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# Week 5 - Database Integration

## Database

This project uses **PostgreSQL** hosted on **Supabase**.

### Why PostgreSQL?

- Relational database with structured data
- Persistent cloud storage
- Easy integration with SQLAlchemy ORM
- Reliable and scalable

---

## Database Schema

The backend currently contains the following table:

### Feature

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Primary Key |
| title | String | Feature title |
| description | String | Feature description |
| image | String | Feature image URL |

### Schema Diagram

![Schema Diagram](W5_SchemaDiagram_[TBI-26100312].png)

---

## Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
DATABASE_URL=your_postgresql_database_url
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GEMINI_API_KEY=your_gemini_api_key
```

A sample configuration is available in `.env.example`.

---

## Database Setup

1. Create a PostgreSQL database (Supabase).
2. Copy the connection string.
3. Add it to the `.env` file.
4. Run the backend:

```bash
uvicorn main:app --reload
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /health | Health Check |
| GET | /api/features | Get all features |
| GET | /api/features/{id} | Get feature by ID |
| GET | /api/features/search | Search feature |
| POST | /api/features | Create feature |
| PUT | /api/features/{id} | Update feature |
| DELETE | /api/features/{id} | Delete feature |
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/profile | User Profile |
| GET | /auth/google | Google OAuth Login |
| POST | /api/ai/chat | AI Chat |

---

# Week 9 - Deployment

## Live Frontend

https://kisan-sarthi-ai-silk.vercel.app

## Live Backend

https://kisan-sarthi-ai.onrender.com

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router

### Backend

- FastAPI
- SQLAlchemy
- PostgreSQL (Supabase)
- JWT Authentication
- Google OAuth 2.0
- Gemini AI API

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## Features

- User Registration & Login
- JWT Authentication
- Google OAuth Login
- AI-powered Agricultural Chatbot
- CRUD Operations on Farming Features
- PostgreSQL Database Integration
- Responsive UI
- Dark Mode Support
- Toast Notifications
- Error Boundary
- Protected Routes

---

## Known Limitations (Free Tier)

- Render free tier automatically spins down after approximately 15 minutes of inactivity.
- The first request after inactivity may take 30–60 seconds while the backend wakes up.
- AI responses may be slightly slower during backend startup.
- Free-tier services may experience occasional cold starts.

---

## Live Application

Frontend:
https://kisan-sarthi-ai-silk.vercel.app

Backend:
https://kisan-sarthi-ai.onrender.com