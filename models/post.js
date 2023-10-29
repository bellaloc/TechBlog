'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Define associations here
      Post.belongsTo(models.User, { foreignKey: 'userId' }); // A Post belongs to a User
      Post.hasMany(models.Comment, { foreignKey: 'postId' }); // A Post has many Comments
    }
  }

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );

  // Add validations for the userId column and the title column
  Post.validate({
    userId: {
      notNull: {
        msg: 'UserId is required',
      },
    },
    title: {
      len: {
        args: [3, 255],
        msg: 'Title must be between 3 and 255 characters long',
      },
    },
  });

  return Post;
};
