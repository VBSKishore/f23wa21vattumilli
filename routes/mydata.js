var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Kishore' });
});

//router.get('mydata’', function(req, res, next) {
    //res.render('mydata', { title: 'Kishore' });
  //});

module.exports = router;