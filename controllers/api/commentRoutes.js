const express = require('express');
const router = express.Router();
const commentController = require('../../controllers');

// Get all comments for a post by post ID route
router.get('/posts/:postId/comments', commentController.getAllCommentsForPost);

// Add a new comment to a post by post ID route
router.post('/posts/:postId/comments', commentController.addCommentToPost);

// Update a comment by comment ID route
router.put('/comments/:commentId', commentController.updateCommentById);

// Delete a comment by comment ID route
router.delete('/comments/:commentId', commentController.deleteCommentById);

module.exports = router;
