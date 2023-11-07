const express = require('express');
<<<<<<< HEAD:controllers/api/userRoutes.js
const userController = require('../userController');
=======
const userController = require('../../controllers/userController'); // Update the path
>>>>>>> 4e7cba26b18f03443dead361ea840e276eab416e:routes/userRoutes.js

const router = express.Router();

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// User logout
router.post('/logout', userController.logoutUser);

module.exports = router;
