const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Get all posts route
router.get('/posts', postController.getAllPosts);

// Get a single post by ID route
router.get('/posts/:id', postController.getPostById);

// Add a new post (form rendering) route
router.get('/addpost', postController.renderAddPostForm);

// Add a new post (form submission) route
router.post('/posts', postController.addNewPost);

// Update a post by ID (form rendering) route
router.get('/editpost/:id', postController.renderEditPostForm);

// Update a post by ID (form submission) route
router.put('/posts/:id', postController.updatePostById);

// Delete a post by ID route
router.delete('/posts/:id', postController.deletePostById);

module.exports = router;
