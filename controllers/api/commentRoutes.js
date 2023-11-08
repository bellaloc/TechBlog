const router = require('express').Router();
const commentController = require('./commentController');
const { Comment } = require('../../models'); 
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/comments', commentController.getCommentsForPost);

// Create a new comment
router.post('/comments', withAuth, commentController.createComment); 

// Update a comment
router.put('/comments/:commentId', withAuth, commentController.updateComment); 

// Delete a comment
router.delete('/comments/:commentId', withAuth, commentController.deleteComment); 

module.exports = router;
