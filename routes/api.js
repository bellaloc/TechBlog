const express = require('express');
const router = express.Router();
const db = require('../models');

// Get all posts
router.get('/posts', async (req, res) => {
  try {
    // Get all posts from the database
    const posts = await db.Post.findAll();

    // Send the posts back to the client
    res.json(posts);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message });
  }
});

// Get a single post by ID
router.get('/posts/:id', async (req, res) => {
  try {
    // Get the post ID from the request parameters
    const postId = parseInt(req.params.id);

    // Find the post by ID in the database
    const post = await db.Post.findByPk(postId);

    // If the post does not exist, return a 404 error
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    // Send the post back to the client
    res.json(post);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message });
  }
});

// Add a new post
router.post('/posts', async (req, res) => {
  try {
    // Get the post data from the request body
    const postData = req.body;

    // Create a new post in the database
    const post = await db.Post.create(postData);

    // Send the new post back to the client
    res.json(post);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message });
  }
});

// Update a post by ID
router.put('/posts/:id', async (req, res) => {
  try {
    // Get the post ID from the request parameters
    const postId = parseInt(req.params.id);

    // Get the post data from the request body
    const postData = req.body;

    // Find the post by ID in the database
    const post = await db.Post.findByPk(postId);

    // If the post does not exist, return a 404 error
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    // Update the post with the new data
    await post.update(postData);

    // Send the updated post back to the client
    res.json(post);
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message });
  }
});

// Delete a post by ID
router.delete('/posts/:id', async (req, res) => {
  try {
    // Get the post ID from the request parameters
    const postId = parseInt(req.params.id);

    // Find the post by ID in the database
    const post = await db.Post.findByPk(postId);

    // If the post does not exist, return a 404 error
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }

    // Delete the post from the database
    await post.destroy();

    // Send a 204 No Content response to the client
    res.status(204).send();
  } catch (error) {
    // Handle error
    res.status(500).json({ error: error.message });
}});

