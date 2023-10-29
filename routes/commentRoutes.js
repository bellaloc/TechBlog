const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

// Create a comment
router.post('/comments', commentController.createComment);

// Get comments for a post
router.get('/posts/:postId/comments', commentController.getCommentsForPost);

// Update a comment
router.put('/comments/:commentId', commentController.updateComment);

// Delete a comment
router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;