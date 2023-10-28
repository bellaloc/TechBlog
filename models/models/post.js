'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Define associations here
      Post.belongsTo(models.User, { foreignKey: 'UserId' }); // A Post belongs to a User
      Post.hasMany(models.Comment, { foreignKey: 'PostId' }); // A Post has many Comments
    }
  }

  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );

  return Post;
};

