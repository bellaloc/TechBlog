const Comment = require('./comment');
const User = require('./user');
const Post = require('./post');

// Comment.belongsTo(User, { foreignKey: 'user_id' });
// Comment.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = { Comment, User, Post };
