var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
  const user = req.body
  res.json(user)
});

module.exports = router;
