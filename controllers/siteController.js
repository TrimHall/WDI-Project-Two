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
  console.log('we are in siteshow Site');
}















module.exports = {
  index: sitesIndex,
  show: sitesShow
};
