const { User, Post, Comment } = require('./models'); 

const seedDatabase = async () => {
  try {
    // Create some sample users
    const users = await User.bulkCreate([
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' },
      { username: 'user3', password: 'password3' },
    ]);

    // Create some sample posts
    const posts = await Post.bulkCreate([
      { title: 'Tech News 1', content: 'This is the first tech news article.', userId: 1 },
      { title: 'Tech News 2', content: 'This is the second tech news article.', userId: 2 },
      { title: 'Tech News 3', content: 'This is the third tech news article.', userId: 3 },
    ]);

    // Create some sample comments
    const comments = await Comment.bulkCreate([
      { text: 'Great article!', postId: 1, userId: 2 },
      { text: 'I agree with the author.', postId: 1, userId: 3 },
      { text: 'Nice post!', postId: 2, userId: 1 },
    ]);

    console.log('Sample data has been seeded into the database.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
};

seedDatabase();
