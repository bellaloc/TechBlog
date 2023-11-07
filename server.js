const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const path = require('path');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Configure Handlebars as the view engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Create and configure the express-session
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Import your controllers and routes with absolute paths
const apiController = require('./controllers/api');
const routesController = require('./controllers/routes');
const commentController = require('./controllers/commentController');
const homeController = require('./controllers/homeController');
const postController = require('./controllers/postController');
const userController = require('./controllers/userController');
const commentRoutes = require('./controllers/api/commentRoutes');
const apiRoutes = require('./controllers/api/index');

// Use the imported controllers and routes
app.use(apiController);
app.use(routesController);
app.use(commentController);
app.use(homeController);
app.use(postController);
app.use(userController);
app.use(commentRoutes);
app.use(apiRoutes);

// Initialize the server and database connection
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
