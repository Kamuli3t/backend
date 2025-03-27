# Portfolio Website Project - README

## Overview

This project is a full-stack web application designed to showcase a developer's portfolio. It includes features for displaying projects, book reviews, and user messages, with an admin panel for content management.

## Features

- **Projects:**
  - Display a list of projects with titles, descriptions, images, and links.
  - View individual project details.
  - Admin users can create, update, and delete projects.
- **Book Reviews:**
  - Display book reviews with information fetched from the Google Books API.
  - Admin users can add, edit, and remove book reviews.
- **Messages:**
  - Allow visitors to send messages (e.g., contact form, questions).
  - Display testimonials.
  - Admin users can view and manage all messages.
- **Admin Panel:**
  - Secure authentication for admin users.
  - Dashboard for managing projects, book reviews, and messages.
- **User Authentication:**
  - User registration and login.

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - jsonwebtoken
  - bcrypt
  - axios
  - multer

## Backend Setup

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Google Books API Key (If using book review functionality)

### Installation

1.  Clone the repository.
2.  Navigate to the `backend` directory.
3.  Install dependencies: `npm install`
4.  Create a `.env` file in the `backend` directory and add the following environment variables:
    - `MONGODB_URI`: Your MongoDB connection string
    - `JWT_SECRET`: A secret key for JWT authentication (generate a strong key)
    - `GOOGLE_BOOKS_API_KEY`: Your Google Books API key (if applicable)
    - `PORT`: The port the server will listen on (e.g., 5000)
5.  Start the server: `npm start`

### Database

- The application uses MongoDB to store data.
- Mongoose is used as the ODM (Object Data Modeling) library.
- Schemas are defined in the `backend/models` directory:
  - `Admin.js`: Admin user schema
  - `BookReview.js`: Book review schema
  - `Message.js`: Message schema
  - `Project.js`: Project schema
  - `User.js`: User schema

### API Endpoints

- The API routes are defined in the `backend/routes` directory:
  - `admin.routes.js`: Admin authentication and registration
  - `bookReview.routes.js`: CRUD operations for book reviews
  - `message.routes.js`: CRUD operations for messages, handling testimonials
  - `project.routes.js`: CRUD operations for projects
  - `user.js`: CRUD operations for users

### Middleware

- `backend/middleware/auth.js`: Contains authentication middleware for admin routes, using JWT.

## Frontend Setup

### Prerequisites

- Node.js and npm installed

### Installation

1.  Navigate to the `frontend` directory.
2.  Install dependencies: `npm install`
3.  Start the development server: `npm start`

### Routing

- React Router DOM is used for frontend routing.
- `createBrowserRouter` is used to define the routes.
- The main routing logic is typically found in `index.js` or `App.js`.

### Components

- The frontend is structured using React components.
- A layout component (`App.js`) provides the basic structure (header, main, footer)
- (You'll need to create page components for home, projects, book reviews, contact, admin dashboard, etc.)

## Important Notes

- **Security:**
  - Password hashing is implemented using bcrypt.
  - JWT is used for authentication.
  - Proper authorization is crucial to protect admin routes.
  - Sanitize user inputs to prevent vulnerabilities (e.g., XSS).
- **Error Handling:** Implement robust error handling in both the backend and frontend.
- **Data Validation:** Validate data on both the client-side and server-side.
- **File Uploads:**
  - Multer is used to handle file uploads in the backend.
  - The `public` directory is used to serve static files.
  - (This part might be removed or modified based on the current implementation)
- **API Keys:**
  - Protect your API keys (e.g., Google Books API key) and store them securely as environment variables.
- **Deployment:**
  - You'll need to deploy both the backend and frontend separately.
  - Consider using platforms like Heroku, Netlify, or Vercel for deployment.

## Future Improvements

- Implement more advanced admin panel features.
- Add user roles and permissions.
- Implement search and filtering.
- Add pagination for large datasets.
- Improve styling and UI design.
- Write tests for backend API and frontend components.
