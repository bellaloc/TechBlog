const { Model, DataTypes } = require('sequelize');
const sequelize = require('./config/connection'); 



class Comment extends Model {}

Comment.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define your other Comment model properties here
  },
  {
    sequelize,
    modelName: 'comment',
  }
);

// You can define validation methods here if needed

Comment.associate = (models) => {
  Comment.belongsTo(models.User, {
    foreignKey: {
      allowNull: false,
    },
  });
  Comment.belongsTo(models.Post, {
    foreignKey: 'postId', // Corrected the foreign key name to match the column name
  });
};

module.exports = Comment;
