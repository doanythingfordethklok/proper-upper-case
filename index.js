module.exports = function(str) {
  str = (str || '').toString().toLowerCase();
  return str.replace(/(?:^|[\s'-])\S/g, function(s) {
    return s.toUpperCase();
  });
};