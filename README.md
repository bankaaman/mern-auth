# MERN Auth

A simple MERN stack authentication project with user registration, login, email verification, and password reset.

## Features

- User registration and login
- Email verification
- Password reset
- Protected routes
- React Context API for state management
- Axios for API calls

## Technologies Used

- React
- Node.js
- Express
- MongoDB & Mongoose
- React Router DOM
- Axios
- Tailwind CSS (optional)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed locally or use MongoDB Atlas

### Installation

1. Clone the repository

\\\ash
git clone https://github.com/bankaaman/mern-auth.git
cd mern-auth
\\\

2. Install dependencies for both backend and frontend

\\\ash
npm install
\\\

3. Create a \.env\ file in your backend folder and add the following:

\\\
VITE_BACKEND_URL=http://localhost:4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=4000
\\\

4. Start the backend server

\\\ash
npm run server
\\\

5. Start the frontend client

\\\ash
npm run dev
\\\

6. Open your browser and navigate to

\\\
http://localhost:5173
\\\

## Folder Structure

\\\
/backend - Express server, routes, controllers
/frontend - React app with components, context, pages
\\\

## License

This project is licensed under the MIT License.

