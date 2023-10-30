module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  // Add a validation for the text column
  Comment.validate({
    text: {
      notNull: {
        msg: 'Text is required',
      },
    },
  });

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

  return Comment;
};
