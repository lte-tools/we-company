var mongoose = require('mongoose'),
  connection = require('./db.model.js').connection;

var Platform = mongoose.model('platform', {
  name: String,
  ccm_status: String,
  cem1_status: String,
  cem2_status: String,
  cem3_status: String,
  soc_status: String,
  type: String,
  location: String,
  update_time: {type: Date, default: Date.now },
});

var update = exports.update = function(_platform, next) {
  if (!_platform.name) {
    next(new Error('no platform name'));
    return;
  }
  var platform = new Platform();
  platform.findOneAndUpdate({name: _platform.name}, {$set: _platform}, {
    upsert: true
  }, function(err, doc) {
    next(err, doc);
  })
};