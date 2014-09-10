var mongoose = require('mongoose'),
  connection = require('./db.model.js').connection;

var Platform = connection.model('platform', new mongoose.Schema({
  name: String,
  ccm_status: String,
  cem1_status: String,
  cem2_status: String,
  cem3_status: String,
  soc_status: String,
  type: String,
  location: String,
  update_time: {type: Date, default: Date.now },
}));

var update = exports.update = function(_platforms) {
  for (var i = _platforms.length - 1; i >= 0; i--) {
    update_platform(_platforms[i], function(err){
      if (err) {
        console.log(err);
        return;
      }
    });
  };
};

var update_platform = exports.update_platform = function(_platform, next) {
  if (!_platform.name) {
    next(new Error('no platform name'));
    return;
  }
  Platform.findOneAndUpdate({name: _platform.name}, {$set: _platform}, {
    upsert: true
  }, function(err, doc) {
    next(err, doc);
  })
};

var find_one = exports.find_one = function(name, next) {
  Platform.findOne({name: name}, function(err, doc) {
    next(err, doc);
  });
};