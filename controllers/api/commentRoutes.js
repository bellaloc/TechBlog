const router = require('express').Router();
const commentController = require('../controllers/commentController');
const { Comment } = require('../../models'); // Import the Comment model
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/comments', commentController.getCommentsForPost);

// Create a new comment
router.post('/comments', withAuth, commentController.createComment); // Added withAuth middleware

// Update a comment
router.put('/comments/:commentId', withAuth, commentController.updateComment); // Added withAuth middleware

// Delete a comment
router.delete('/comments/:commentId', withAuth, commentController.deleteComment); // Added withAuth middleware

module.exports = router;
