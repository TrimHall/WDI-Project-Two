const Site = require('../models/site');

function reviewsCreate(req, res) {
  console.log('we are in reviews create controller');
  Site
    .findById(req.body.id)
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
