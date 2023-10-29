const db = require('../models');

const postController = {
  // Create a new post
  async createPost(req, res) {
    try {
      const { title, content } = req.body;
      const { userId } = req.session; // Assuming you store the user's ID in the session

      // Validate the title and content fields
      if (typeof title !== 'string' || !title || typeof content !== 'string' || !content) {
        return res.status(400).json({ error: 'title and content fields must be non-empty strings' });
      }

      // Create the post
      const post = await db.Post.create({
        title,
        content,
        UserId: userId,
      });

      // Respond with the created post
      res.status(201).json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create post' });
    }
  },

  // Get all posts
  async getAllPosts(req, res) {
    try {
      // Get all posts
      const posts = await db.Post.findAll({
        include: db.User,
      });

      // Respond with all posts
      res.json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get posts' });
    }
  },

  // Get a specific post by ID
  async getPostById(req, res) {
    try {
      const postId = req.params.postId;

      // Validate the postId field
      if (typeof postId !== 'number' || !postId) {
        return res.status(400).json({ error: 'postId field must be a non-empty number' });
      }

      // Find the post by ID
      const post = await db.Post.findByPk(postId, {
        include: db.User,
      });

      // If the post does not exist, return a 404 error
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Respond with the post
      res.json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get the post' });
    }
  },

  // Update a post
  async updatePost(req, res) {
    try {
      const postId = req.params.postId;
      const { title, content } = req.body;

      // Validate the postId and content fields
      if (typeof postId !== 'number' || !postId || typeof content !== 'string' || !content) {
        return res.status(400).json({ error: 'postId and content fields must be non-empty' });
      }

      // Find the post by ID
      const post = await db.Post.findByPk(postId);

      // If the post does not exist, return a 404 error
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Update the post title and content
      post.title = title;
      post.content = content;

      // Save the updated post
      await post.save();

      // Respond with the updated post
      res.json({ post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update post' });
    }
  },

  // Delete a post
async deletePost(req, res) {
  try {
    const postId = req.params.postId;

    // Validate the postId field
    if (typeof postId !== 'number' || !postId) {
      return res.status(400).json({ error: 'postId field must be a non-empty number' });
    }

    // Find the post by ID
    const post = await db.Post.findByPk(postId);

    // If the post does not exist, return a 404 error
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Delete the post
    await post.destroy();

    // Respond with a 204 No Content status
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete post' });
  };
  },
};

module.exports = postController;