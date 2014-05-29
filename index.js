var _ = require('lodash');

module.exports = function(str) {
  var fstr = (str || '').toString().toLowerCase().split(/\s+/g);

  fstr = _.map(fstr, function(s) {
    return (s[0] || '').toUpperCase() + s.slice(1, s.length);
  }).join(' ');

  return fstr;
};