const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upvotes: {
      type: DataTypes.INTEGER,
    },
    downvotes: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Comment',
  }
);

Comment.associate = (models) => {
  Comment.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });
  Comment.belongsTo(models.Post, {
    foreignKey: 'postId',
  });
};

module.exports = Comment;
