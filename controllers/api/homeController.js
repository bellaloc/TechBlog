const homeController = {
    renderHomePage: (req, res) => {
      // Implement the logic to render your home page
      res.send('Welcome to the home page');
    },
    
    renderAboutPage: (req, res) => {
      // Implement the logic to render the about page
      res.send('This is the about page');
    },
  
  };
  
  module.exports = homeController;
  