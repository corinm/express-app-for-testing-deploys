var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const port = req.headers.host;
  return res.render('index', { title: `Express on port ${port}` });c
});

module.exports = router;
