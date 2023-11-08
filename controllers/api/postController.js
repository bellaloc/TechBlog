const express = require('express');
const router = express.Router();
const db = require('../../models');

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      include: { model: db.User, as: 'author' },
    });
    res.json(posts);
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
      res.json(post);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new post
router.post('/posts', async (req, res) => {
  try {
    const postData = req.body;
    // Create a new post 
    const post = await db.Post.create(postData);
    res.status(201).json(post); // 201 Created status for successful creation
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a post by ID
router.put('/posts/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const postData = req.body;
    const post = await db.Post.findByPk(postId);
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      await post.update(postData);
      res.json(post);
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
      res.status(204).end(); // 204 No Content status for successful deletion
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
