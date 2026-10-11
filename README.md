# iNotebook — Cloud-Based Notes App

iNotebook is a full-stack web application that allows users to securely create, manage, and organize their personal notes. Users can sign up, log in, and access their notes through an authenticated account.

## Features

- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Create, view, update, and delete notes
- Protected API routes
- Responsive React user interface
- MongoDB database integration

## Tech Stack

**Frontend:** React.js, React Router, CSS

**Backend:** Node.js, Express.js

**Database:** MongoDB, Mongoose

**Authentication:** JSON Web Tokens (JWT), bcrypt.js

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB running locally

### 1. Clone the repository

```bash
git clone https://github.com/Sanyam-Jain234/iNotebook.git
cd iNotebook
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
npm install --prefix backend
```

### 4. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
JWT_SECRET=your_new_random_secret
```

Use your own strong random secret. Never commit this file to GitHub.

### 5. Start the application

Run the backend and frontend in separate terminals.

**Terminal 1 — Backend**

```bash
node backend/index.js
```

**Terminal 2 — Frontend**

```bash
npm start
```

The frontend runs at `http://localhost:3000` and the backend at `http://localhost:5000`.

Ensure MongoDB is running locally before starting the backend.

## Project Structure

```text
iNotebook/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── db.js
│   └── index.js
├── public/
├── src/
│   ├── components/
│   └── context/
├── .gitignore
├── package.json
└── README.md
```

## Learning Outcomes

This project helped me practice full-stack development, REST API integration, authentication, password hashing, database operations, and frontend-backend communication.

## Author

**Sanyam Jain**

GitHub: [Sanyam-Jain234](https://github.com/Sanyam-Jain234)
