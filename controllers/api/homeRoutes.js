const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Define routes for the home page
router.get('/', homeController.renderHomePage);

// Define routes for the about page
router.get('/about', homeController.renderAboutPage);

module.exports = router;
