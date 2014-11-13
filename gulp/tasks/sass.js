var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var pixrem = require('gulp-pixrem');
var config = require('../../config');

gulp.task('sass', function() {
  return gulp.src(config.paths.src.sass + '/**')
    .pipe(sass({
      loadPath: config.paths.src.sassIncludePaths,
    }))
    .on('error', function (err) { console.log(err.message); })
    .pipe(pixrem())
    .pipe(gulp.dest(config.paths.build.css));
});