var express = require('express');
var router = express.Router();


/* GET requeriments listing. */
router.get('/', function(req, res, next) {
  res.render('boletos');
});


module.exports = router;