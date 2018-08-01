const Site = require('../models/site');

function sitesIndex(req, res) {
  Site
    .find()
    .then(sites => {
      console.log(sites);
      res.render('sites/index', {sites});
    });
}

function sitesShow(req, res) {
  const siteId = req.params.id;
  Site
    .findById(siteId)
    .populate('reviews.author')
    .then(site => res.render('sites/show', {site}));
}

function sitesNew(req, res) {
  res.render('sites/new');
}

function sitesCreate(req, res) {
  console.log(req.body);
  Site
    .create(req.body)
    .then(() => res.redirect('/sites/index'))
    .catch(err => console.log(err));
}

function sitesEdit(req, res) {
  Site
    .findById(req.params.id)
    .then(site => res.render('sites/edit', {site}))
    .catch(err => console.log(err));
}

function sitesUpdate(req, res) {
  Site
    .findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.redirect('/sites/index'))
    .catch(err => console.log(err));
}

function sitesDelete(req, res) {
  console.log('we are in sitesDelete');
  Site
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/sites/index'))
    .catch(err => console.log(err));
}

module.exports = {
  index: sitesIndex,
  show: sitesShow,
  new: sitesNew,
  create: sitesCreate,
  edit: sitesEdit,
  update: sitesUpdate,
  delete: sitesDelete
};
