const express = require('express');
const router = express.Router();
const userController = require('../../controllers');

// User registration route
router.post('/register', userController.registerUser);

// User login route
router.post('/login', userController.loginUser);

// User logout route
router.post('/logout', userController.logoutUser);

module.exports = router;
