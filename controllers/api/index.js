const express = require('express');
const router = express.Router();

const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');


router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/home', homeRoutes);

module.exports = router;
