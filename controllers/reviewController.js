const Site = require('../models/site');

function reviewsCreate(req, res) {
  console.log('we are in reviews create controller');
  Site
    .findById(req.params.siteId)
    .then(site => {
      console.log('AT LEAST YOU GOT THIS FAR...');
      site.reviews.push(req.body);
      return site.save();
    })
    .then(site => res.redirect(`/sites/${site.id}`))
    .catch(err => console.log(err));


}


module.exports = {
  create: reviewsCreate
};
