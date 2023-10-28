const db = require('../models');

const commentController = {
  // Create a new comment for a post
  createComment: async (req, res) => {
    try {
      const { text, postId } = req.body;
      const { userId } = req.session; // Assuming you store user's ID in the session

      const comment = await db.Comment.create({
        text,
        PostId: postId,
        UserId: userId,
      });

      res.status(201).json({ comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create comment' });
    }
  },

  // Get all comments for a specific post
  getCommentsForPost: async (req, res) => {
    try {
      const postId = req.params.postId;

      const comments = await db.Comment.findAll({
        where: { PostId: postId },
        include: db.User,
      });

      res.json({ comments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get comments' });
    }
  },

  // Update a comment
  updateComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;
      const { text } = req.body;

      const comment = await db.Comment.findByPk(commentId);

      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      comment.text = text; // Update the comment text
      await comment.save();

      res.json({ comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update comment' });
    }
  },

  // Delete a comment
  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;

      const comment = await db.Comment.findByPk(commentId);

      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      await comment.destroy(); // Delete the comment

      res.status(204).end(); // Respond with 204 No Content status
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete comment' });
    }
  },
};

module.exports = commentController;
