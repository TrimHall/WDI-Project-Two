const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');
const reviewController = require('../controllers/reviewController');

router.get('/', (req, res) => res.render('pages/_home'));
router.get('/_about', (req, res) => res.render('pages/_about'));

router.get('/sites/:id/edit', siteController.edit);

router.route('/sites/index')
  .get(siteController.index);

router.route('/registrations/new')
  .get(registrationController.new);

router.route('/reviews/new')
  .post(reviewController.create);

router.route('/registrations')
  .post(registrationController.create);

router.route('/sessions/new')
  .get(sessionController.new);

router.route('/sessions')
  .post(sessionController.create);

router.route('/sessions/delete')
  .get(sessionController.delete);

router.route('/sites/new')
  .get(siteController.new);

router.route('/sites')
  .post(siteController.create);

router.route('/sites/:id')
  .get(siteController.show)
  .put(siteController.update)
  .delete(siteController.delete);





module.exports = router;
