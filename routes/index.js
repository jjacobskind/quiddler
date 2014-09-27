var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res) {
	var players = req.body.players.split("#$#%");
	console.log(players);
});

module.exports = router;
