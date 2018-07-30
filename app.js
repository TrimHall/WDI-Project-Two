const express = require('express');
const app = express();
// const PORT = 8000;
const { PORT, DB_URI } = require('./config/environment');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(DB_URI);
const morgan = require('morgan');



const expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('views', `${__dirname}/views`);

// statics

app.use(express.static`${__dirname}/public`);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
