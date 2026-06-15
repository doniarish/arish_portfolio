# Arish Doni S — Portfolio

A full-stack portfolio website built with **React (Vite)** on the frontend and **Express + Nodemailer** on the backend.

## Project Structure

```
arish/
├── frontend/        # React + Vite app
│   ├── src/
│   │   ├── components/
│   │   └── ...
│   └── public/      # Static assets (images, PDF)
│
├── backend/         # Express + Nodemailer API
│   ├── server.js
│   ├── .env         # ⚠️ Not committed — copy from .env.example
│   └── .env.example
│
├── firebase.json    # Firebase hosting config
└── .firebaserc      # Firebase project
```

## Getting Started

### Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### Backend
```bash
cd backend
npm install
# Copy .env.example → .env and fill in your Gmail credentials
cp .env.example .env
npm run dev
# → http://localhost:3001
```

## Environment Variables

### `backend/.env`
| Variable | Description |
|----------|-------------|
| `EMAIL_USER` | Your Gmail address |
| `EMAIL_PASS` | Gmail App Password (16 chars) |
| `EMAIL_RECEIVER` | Where contact emails are sent |
| `PORT` | Backend port (default: 3001) |
| `FRONTEND_URL` | Frontend origin for CORS |

### `frontend/.env`
| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Backend API URL |

## Deploy

```bash
cd frontend && npm run build
firebase deploy
```

## Tech Stack
- **Frontend**: React 18, Vite, Vanilla CSS
- **Backend**: Node.js, Express, Nodemailer
- **Email**: Gmail SMTP with App Password
- **Hosting**: Firebase Hosting
