const router = require('express').Router();
const postController = require('./postController');

// Get all posts
router.get('/posts', postController.getAllPosts);

// Create a new post
router.post('/posts', postController.createPost);

// Update a post
router.put('/posts/:postId', postController.updatePost);

// Delete a post
router.delete('/posts/:postId', postController.deletePost);

module.exports = router;
