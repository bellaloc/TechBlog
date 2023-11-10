const db = require('../models');

const commentController = {
  // Get all comments for a post by post ID
  getAllCommentsForPost: async (req, res) => {
    try {
      const postId = parseInt(req.params.postId);
      const comments = await db.Comment.findAll({
        where: { post_id: postId },
        include: { model: db.User, as: 'user' },
      });
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Add a new comment to a post by post ID
  addCommentToPost: async (req, res) => {
    try {
      const { text, user_id } = req.body;
      const postId = parseInt(req.params.postId);

      // Create a new comment
      const comment = await db.Comment.create({
        text,
        user_id,
        post_id: postId,
      });

      res.status(201).json(comment); // 201 Created status for successful creation
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a comment by comment ID
  updateCommentById: async (req, res) => {
    try {
      const commentId = parseInt(req.params.commentId);
      const { text } = req.body;
      const comment = await db.Comment.findByPk(commentId);

      if (!comment) {
        res.status(404).json({ error: 'Comment not found' });
      } else {
        await comment.update({ text });
        res.json(comment);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a comment by comment ID
  deleteCommentById: async (req, res) => {
    try {
      const commentId = parseInt(req.params.commentId);
      const comment = await db.Comment.findByPk(commentId);

      if (!comment) {
        res.status(404).json({ error: 'Comment not found' });
      } else {
        await comment.destroy();
        res.status(204).end(); // 204 No Content status for successful deletion
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = commentController;
