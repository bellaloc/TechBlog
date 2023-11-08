const db = require('../../models');

const commentController = {
  createComment: async (req, res) => {
    try {
      const { text, postId } = req.body;
      const { userId } = req.session;

      if (!text || !postId || !userId) {
        return res.status(400).json({ error: 'text, postId, and userId fields are required' });
      }

      const post = await db.Post.findByPk(postId);

      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      const comment = await db.Comment.create({
        text,
        PostId: postId,
        UserId: userId,
      });

      res.status(201).json({ comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create a comment' });
    }
  },

  getCommentsForPost: async (req, res) => {
    try {
      const postId = req.params.postId;

      if (!postId) {
        return res.status(400).json({ error: 'postId field is required' });
      }

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

  updateComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;
      const { text } = req.body;

      if (!commentId || !text) {
        return res.status(400).json({ error: 'commentId and text fields are required' });
      }

      const comment = await db.Comment.findByPk(commentId);

      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      comment.text = text;
      await comment.save();

      res.json({ comment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update the comment' });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;

      if (!commentId) {
        return res.status(400).json({ error: 'commentId field is required' });
      }

      const comment = await db.Comment.findByPk(commentId);

      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }

      await comment.destroy();

      res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete the comment' });
    }
  },
};

module.exports = commentController;
