var gulp = require('gulp');
var config = require('../../config/app.js');

gulp.task('copy', function() {
  return gulp.src(config.paths.src.fonts + '/**')
    .pipe(gulp.dest(config.paths.build.fonts));
});