var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function(cb) {
  runSequence('copy', 'svg', 'modernizr', 'browserify', 'sass', 'metalsmith', cb);
});