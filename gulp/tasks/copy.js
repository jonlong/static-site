var gulp = require('gulp');
var config = require('../../config');

gulp.task('copy', function() {
  return gulp.src(config.paths.src.components + '/**/*.js')
    .pipe(gulp.dest(config.paths.build.js + '/libs/components'));
});