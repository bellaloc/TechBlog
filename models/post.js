const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  class Post extends Model {}

  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Title must be between 3 and 255 characters long',
          },
        },
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'UserId is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );

  return Post;
};
