var gutil = require("gulp-util");

module.exports = function() {

  var args = Array.prototype.slice.call(arguments);

  gutil.log('Error', args);

  // Keep gulp from hanging on this task
  this.emit('end');
};