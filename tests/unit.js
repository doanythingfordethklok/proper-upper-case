var assert = require('assert');
var toProperUpper = require('../index.js');

suite('Proper Upper', function() {

  test('all lowercase', function(done) {
    var ugly = 'bill murray';
    var gold = 'Bill Murray';
    var pretty = toProperUpper(ugly);

    assert.equal(pretty, gold, 'String should be formatted properly.');

    done();
  });


  test('all uppercase', function(done) {
    var ugly = 'BILL MURRAY';
    var gold = 'Bill Murray';
    var pretty = toProperUpper(ugly);

    assert.equal(pretty, gold, 'String should be formatted properly.');

    done();
  });


  test('random case', function(done) {
    var ugly = 'biLl mUrRAY';
    var gold = 'Bill Murray';
    var pretty = toProperUpper(ugly);

    assert.equal(pretty, gold, 'String should be formatted properly.');

    done();
  });
});