var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var config = require('../../config/app');

gulp.task('images', function() {
  return gulp.src('./' + config.paths.src.img + '/**')
    .pipe(changed(config.paths.build.img)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(config.paths.build.img));
});