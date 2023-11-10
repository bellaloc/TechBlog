const db = require('../models');

const homeController = {
  // Get all posts for the home page
  getAllPosts: async (req, res) => {
    try {
      const posts = await db.Post.findAll({
        include: { model: db.User, as: 'author' },
      });
      res.render('home', { posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = homeController;
