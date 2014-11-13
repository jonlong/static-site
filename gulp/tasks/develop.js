var gulp = require('gulp');
var runSequence = require('run-sequence');

/*
  Starts a live-reloading development environment:

  - watches CSS and JS
  - livereload client

 */

gulp.task('develop', function(callback) {
  runSequence('build', ['server', 'watch'], callback);
});