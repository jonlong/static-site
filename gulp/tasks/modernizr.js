var gulp = require('gulp');
var modernizr = require('gulp-modernizr');
var config = require('../config').modernizr;
var appConfig = require('../../config');

gulp.task('modernizr', function() {
  return gulp.src(appConfig.paths.src.js + '/*.js')
    .pipe(modernizr({
      tests: [
        'inlinesvg',
        'svg'
      ]
    }))
    .pipe(gulp.dest(config.dest));
});
