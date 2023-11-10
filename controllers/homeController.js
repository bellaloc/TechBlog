const db = require('.././models');
const router = require('express').Router();


// const homeController = {
//   // Get all posts for the home page
//   getAllPosts: async (req, res) => {
//     try {
//       const posts = await db.Post.findAll({
//         include: { model: db.User, as: 'author' },
//       });
//       res.render('home', { posts });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   },
// };

router.get('/', (req, res) => {
  res.render('main')
});

module.exports = router;
