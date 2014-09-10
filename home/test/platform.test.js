var platform = require('../model/platform.model.js');
exports.testAdd = function(test) {
  platform.update([
  {
    name: 'platform1',
    cem1_status: 'ok'
  }
  ]);
  platform.find_one('platform1', function(err, doc) {
    test.ifError(err);
    test.equal(doc.cem1_status, 'ok');
    test.done();
  });

};