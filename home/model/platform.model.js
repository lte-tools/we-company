var mongoose = require('mongoose'),
  connection = require('./db.model.js').connection;

var Platform = mongoose.model('platform', {
  name: String,
})
