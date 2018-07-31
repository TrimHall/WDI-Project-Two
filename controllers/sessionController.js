const User = require('../models/user');
// const flash = require('flash');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  console.log('we are in SessionsCreate');
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        res.status(401).render('sessions/new', { message: 'Try again' });
      } else {
        req.flash('primary', `Welcome back ${user.username}!`);
        req.session.userId = user.id;
        res.redirect('/'); // login was successful so redirect to home
      }
    });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => {
    req.flash('info', 'You have been logged out');
    res.redirect('/');
  });
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
