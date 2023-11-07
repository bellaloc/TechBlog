
const router = require('express').Router();
const commentController = require('../controllers/commentController');
const { comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/comments', commentController.getAllComments);

// Create a new comment
router.post('/comments', commentController.createComment);

// Update a comment
router.put('/comments/:commentId', commentController.updateComment);

// Delete a comment
router.delete('/comments/:commentId', commentController.deleteComment);

module.exports = router;
