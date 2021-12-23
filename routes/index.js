var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

router.get('/users/cool', function(req, res, next) {
  res.render('cool', { title: 'Express' });
});
module.exports = router;
