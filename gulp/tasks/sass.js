var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', ['images'], function () {
  return gulp.src(config.src)
    .pipe(sass({
      // compass: true,
      bundleExec: true,
      loadPath: config.loadPaths,
      style: 'compressed'
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
