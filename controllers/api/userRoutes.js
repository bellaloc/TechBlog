const express = require('express');
const router = express.Router();
const db = require('../models'); 
const userController = require('../controllers/userController');

// User registration route
router.post('/register', userController.registerUser);

// User login route
router.post('/login', userController.loginUser);

// User logout route
router.post('/logout', userController.logoutUser);

// API route to get the user's profile
router.get('/profile', (req, res) => {
  if (req.session.userId) {
    // Retrieve the user's profile data from the database
    db.User.findByPk(req.session.userId)
      .then((user) => {
        if (user) {
          // Send the user's profile data as a JSON response
          res.json({
            username: user.username,
            email: user.email,
           
          });
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: 'Error fetching user profile' });
      });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

module.exports = router;
