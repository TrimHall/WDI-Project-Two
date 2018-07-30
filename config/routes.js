const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', (req, res) => res.render('pages/_home'));
router.get('/_about', (req, res) => res.render('pages/_about'));

router.route('/sites/index')
  .get(siteController.index);

router.route('/sites/:id')
  .get(siteController.show);

module.exports = router;
