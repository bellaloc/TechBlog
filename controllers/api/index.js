<<<<<<< HEAD
const express = require('express');
const router = express.Router();

// Import your route modules
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
=======
<<<<<<<< HEAD:controllers/api/index.js
const express = require('express');
const router = express.Router();

// Import your route modules from the correct locations
const homeRoutes = require('./homeRoutes'); // Update the path
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes'); // Update the path
>>>>>>> 4e7cba26b18f03443dead361ea840e276eab416e

// Use the imported route modules
router.use('/', homeRoutes); // Define the routes for your homepage
router.use('/user', userRoutes); // Define the routes for user-related actions
router.use('/post', postRoutes); // Define the routes for post-related actions
router.use('/comment', commentRoutes); // Define the routes for comment-related actions

module.exports = router;
<<<<<<< HEAD
=======
========
>>>>>>>> 4e7cba26b18f03443dead361ea840e276eab416e:controllers/index.js
>>>>>>> 4e7cba26b18f03443dead361ea840e276eab416e
