const Comment = require('./Comment');
const User = require('./User');
const Post = require('./Post');

Comment.belongsTo(User, { foreignKey: 'UserId' });
Comment.belongsTo(Post, { foreignKey: 'PostId' });

module.exports = { Comment, User, Post };
