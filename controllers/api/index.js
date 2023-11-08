const express = require('express');
const router = express.Router();

const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postController');
const userRoutes = require('./userRoutes');



router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);


module.exports = router;
