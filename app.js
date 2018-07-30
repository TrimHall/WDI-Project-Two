const express = require('express');
const app = express();
// const PORT = 8000;
const { PORT, DB_URI } = require('./config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



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

const router = require('./config/routes');
app.use(router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
