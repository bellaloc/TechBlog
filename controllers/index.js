const express = require('express');
const router = express.Router();

// Import your route modules
const homeRoutes = require('../routes/homeRoutes');
const userRoutes = require('../routes/userRoutes');
const postRoutes = require('../routes/postRoutes');
const commentRoutes = require('../routes/commentRoutes');

// Use the imported route modules
router.use('/', homeRoutes); // Define the routes for your homepage
router.use('/user', userRoutes); // Define the routes for user-related actions
router.use('/post', postRoutes); // Define the routes for post-related actions
router.use('/comment', commentRoutes); // Define the routes for comment-related actions

module.exports = router;
