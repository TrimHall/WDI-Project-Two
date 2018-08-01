const Site = require('../models/site');

function reviewsCreate(req, res) {
  console.log(req.body);
  Site
    .findById(req.params.siteId)
    .then(site => {
      site.reviews.push(req.body);
      return site.save();
    })
    .then(site => res.redirect(`/sites/${site.id}`))
    .catch(err => console.log(err));


}


module.exports = {
  create: reviewsCreate
};
