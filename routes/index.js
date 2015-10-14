var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'LOLrota - O gerador de Blábláblá do LOL' });
});

module.exports = router;
