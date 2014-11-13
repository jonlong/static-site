var gulp = require('gulp');
var server = require('gulp-webserver');
var config = require('../../config');

gulp.task('server', function(){
  return gulp.src(config.paths.build.base)
    .pipe(server({
      livereload: true,
      // open: true
    }));
});