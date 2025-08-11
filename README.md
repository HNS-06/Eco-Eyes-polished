# Echo Eyes — Polished Mock Project

This package contains a complete Echo Eyes project (mock DB). It includes:
- backend/ (mock-data backend with Socket.IO)
- frontend/ (React frontend with cyberpunk UI, animations, responsive)

## Quick start

1. Start backend
```
cd backend
npm install
npm start
```

2. Start frontend (in a new terminal)
```
cd frontend
npm install
npm start
```

Visit http://localhost:3000 (frontend) and ensure backend is running at http://localhost:4000.

To enable MongoDB later, edit backend/config.js and set USE_DB: true and DB_URI accordingly.
