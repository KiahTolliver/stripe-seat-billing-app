# Stripe Seat Billing App

This project is a simple fullstack application built with React for the frontend and Node.js for the backend. It implements seat-based billing using Stripe and is the code to accompany a blog post.

## Project Structure

```
my-fullstack-app
├── backend
│   ├── .env
│   ├── src
│   │   ├── index.js
│   │   ├── stripe.js
│   └── package.json
├── frontend
│   ├── public
│   │   ├── index.html
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

### Accessing the Application

Once both the backend and frontend servers are running, you can access the application in your web browser at `http://localhost:3000`. You should see a form to book seats and a checkout button rendered on the page.

### Blog Post

This project is the code to accompany a blog post detailing how to implement seat-based billing using Stripe. The blog post explains the concepts and steps involved in setting up this application.