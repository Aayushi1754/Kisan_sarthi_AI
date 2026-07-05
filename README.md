# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## Week 4 - FastAPI Backend

### Backend Setup

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

### Frontend Setup

```bash
npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```
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