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




module.exports = {
  index: sitesIndex,
  show: sitesShow,
  new: sitesNew,
  create: sitesCreate
};
