var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function(cb) {
  runSequence('svg', 'sass', ['metalsmith', 'polyfills'], cb);
});