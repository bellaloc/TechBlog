const sequelize = require('../config/connection');
const commentData = require('./commentData.json');
const userData = require('./userData.json');
const postData = require('./postData.json');
const projectData = require('./projectData.json');

const { User, Post, Comment, Project } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  try {
    // Create some sample users
    const users = await User.bulkCreate(userData);

    // Create some sample posts
    const posts = await Post.bulkCreate(postData);

    // Create some sample comments
    const comments = await Comment.bulkCreate(commentData);

  

    console.log('Sample data has been seeded into the database.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }

  process.exit(0);
};

seedDatabase();
