const express = require('express');
const router = express.Router();
const db = require('../models');
const path = require('path'); // Import the 'path' module

// // Set up your view engine to use Handlebars
// router.set('view engine', 'hbs');
// app.get('/', (req, res) => {
//   res.send('Tech Blog!'); 
// });

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      include: { model: db.User, as: 'author' },
    });

    // Render a Handlebars view and pass the 'posts' data to it
    res.render('posts', { posts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single post by ID
router.get('/posts/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = await db.Post.findByPk(postId, {
      include: { model: db.User, as: 'author' },
    });

    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      // Render a Handlebars view and pass the 'post' data to it
      res.render('post', { post });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new post (form rendering)
router.get('/addpost', (req, res) => {
  // Render a form for adding a new post
  res.render('addpost');
});

// Add a new post (form submission)
router.post('/posts', async (req, res) => {
  try {
    const postData = req.body;

    // Create a new post
    const post = await db.Post.create(postData);

    // Redirect to the post's details page
    res.redirect(`/posts/${post.id}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a post by ID (form rendering)
router.get('/editpost/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = await db.Post.findByPk(postId);

    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      // Render a form for editing the post and pass the 'post' data to it
      res.render('editpost', { post });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a post by ID (form submission)
router.put('/posts/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const postData = req.body;
    const post = await db.Post.findByPk(postId);

    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      await post.update(postData);

      // Redirect to the post's details page after updating
      res.redirect(`/posts/${post.id}`);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a post by ID
router.delete('/posts/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = await db.Post.findByPk(postId);

    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      await post.destroy();

      // Redirect to the list of posts after successful deletion
      res.redirect('/posts');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
