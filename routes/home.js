var express = require('express');
var router = express.Router();

/* GET prediction page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

module.exports = router;
