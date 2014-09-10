var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/platform/update', function(req, res) {
  var platforms = JSON.decode(req.param['data'] || '[]');
  
});

module.exports = router;
