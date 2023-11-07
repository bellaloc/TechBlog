const router = require('express').Router();
const userController = require('../controllers/userController');

// Get all users
router.get('/users', userController.getAllUsers);

// Create a new user
router.post('/users', userController.createUser);

// Update a user
router.put('/users/:userId', userController.updateUser);

// Delete a user
router.delete('/users/:userId', userController.deleteUser);

module.exports = router;
