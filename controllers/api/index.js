const router = require('express').Router();

const userApi = require('./userApi');
const postApi = require('./postApi');
const commentApi = require('./commentApi');

router.use('/users', userApi);
router.use('/post', postApi);
router.use('/comment', commentApi);

module.exports = router
