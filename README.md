# DroidLogcat Blog Website

A simple blog platform built with Node.js, Express.js, EJS, and MongoDB. The website includes features such as authentication, file uploads, and session management.

## Features

- **User Authentication**: Secure user login and registration using JSON Web Tokens (JWT).
- **File Uploads**: Support for uploading images and files using Multer.
- **Session Management**: Cookie-based session management with Cookie Parser.
- **Dynamic Views**: Templating with EJS for dynamic and responsive content.
- **MongoDB Integration**: Data storage and retrieval using MongoDB.
- **Responsive Design**: User-friendly and mobile-responsive interface.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript)
- **Database**: MongoDB
- **File Handling**: Multer
- **Authentication**: JSON Web Token (JWT)
- **Session Management**: Cookie Parser

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/droidlogcat.git
   cd droidlogcat
   
2.  **Install dependencies:**
    ```bash
    npm install
   
3.  **Set up environment variables:**
    ```bash
    PORT=3000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
   
4.  **Run the application:**
   ```bash
    npm run dev
