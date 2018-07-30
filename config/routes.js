const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const registrationController = require('../controllers/registrationController');

router.get('/', (req, res) => res.render('pages/_home'));
router.get('/_about', (req, res) => res.render('pages/_about'));

router.route('/sites/index')
  .get(siteController.index);

router.route('/registrations/new')
  .get(registrationController.new);

router.route('/registrations')
  .post(registrationController.create);

router.route('/sites/new')
  .get(siteController.new);

router.route('/sites')
  .post(siteController.create);

router.route('/sites/:id')
  .get(siteController.show);




module.exports = router;
