const router = require('express').Router();


const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes'); 


router.use('/api/comments', commentRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/users', userRoutes);
router.use('/home', homeRoutes);

module.exports = router;
