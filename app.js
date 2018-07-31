const express = require('express');
const app = express();
const { PORT, DB_URI } = require('./config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('express-flash');
const session = require('express-session');
const User = require('./models/user');



const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', `${__dirname}/views`);

// statics
app.use(express.static(`${__dirname}/public`));


// morgan middleware (default)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true})); // adds req.body
app.use(methodOverride((req) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: 'thiscouldbeanything',
  resave: false,
  saveUninitialized: false
}));

// checks the session cookie for a user
app.use((req, res, next) => {
  if(!req.session.userId) return next();
  User
    .findById(req.session.userId)
    .then(user => {
      res.locals.user = user;
      res.locals.isLoggedIn = true;
      next();
    });
});
app.use(flash());



const router = require('./config/routes');
app.use(router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
