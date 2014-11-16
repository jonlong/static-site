var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var pixrem = require('gulp-pixrem');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', ['images'], function () {
  return gulp.src(config.src)
    .pipe(sass({
      // compass: true,
      // bundleExec: true,
      loadPath: config.loadPaths
    }))
    .on('error', handleErrors)
    .pipe(pixrem())
    .pipe(gulp.dest(config.dest));
});
