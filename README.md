# Tech Blog

Tech Blog is a web application that allows users to publish and read technology-related blog posts. It's a platform for tech enthusiasts to share their insights, knowledge, and thoughts on various tech topics.

![Screenshot](/Users/View/Desktop/bootcamp/homework/Tech Blog/TechBlog/Assets/Screen Shot 2023-11-13 at 4.36.02 PM.png)


## Features

- User Registration: Users can create an account with a username and password.
- User Authentication: Registered users can log in securely to access their accounts.
- Create Blog Posts: Logged-in users can create new blog posts, complete with titles and content.
- Comment System: Users can add comments to existing blog posts.
- Edit and Delete Posts: Authors can edit and delete their own blog posts.
- User Profiles: Each user has a profile page to showcase their published posts.

## Technologies Used

- Node.js: A JavaScript runtime environment.
- Express.js: A web application framework for Node.js.
- Sequelize: An Object-Relational Mapping (ORM) library for managing databases.
- MySQL: A relational database for storing user data, posts, and comments.
- Handlebars: A template engine for rendering dynamic content.
- Passport.js: A middleware for user authentication.
- Bootstrap: A front-end framework for responsive design.
- Heroku: A cloud platform for deploying the application.

## heroku link
https://morning-temple-91811-57fafbc7cf6d.herokuapp.com/

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bellaloc/TechBlog

   cd tech-blog

    npm install

   -- create .ENV
 
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_HOST=localhost
    DB_PORT=3306
    SESSION_SECRET=your_session_secret

    bash
    mysql -u your_database_user -p

    SQL
    CREATE DATABASE techBlog_db;

    bash
    npm run seed  or node seeds/seeds.js

    npm start

    Open your web browser and go to http://localhost:3001 to access the application.

Usage
Sign up for an account if you don't have one.
Log in with your credentials.
Create new blog posts from your dashboard.
Read and comment on posts created by other users.
Edit or delete your own posts.
Contributors
Your Name
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

