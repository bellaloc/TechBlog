const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all posts
router.get('/posts', postController.getAllPosts);

// Create a new post
router.post('/posts', postController.createPost);

// Update a post
router.put('/posts/:postId', postController.updatePost);

// Delete a post
router.delete('/posts/:postId', postController.deletePost);

module.exports = router;
