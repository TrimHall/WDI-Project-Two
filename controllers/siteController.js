const Site = require('../models/site');

function sitesIndex(req, res) {
  Site
    .find()
    .then(sites => {
      console.log(sites);
      res.render('sites/index', {sites});
    });
}

module.exports = {
  index: sitesIndex
};
