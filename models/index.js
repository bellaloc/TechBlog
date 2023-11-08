const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

Comment.belongsTo(User, { foreignKey: 'user_id' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = { Comment, User, Post };
