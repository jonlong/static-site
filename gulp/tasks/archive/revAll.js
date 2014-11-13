var gulp = require('gulp');
var revall = require('gulp-rev-all');
var config = require('../../config/app');
var path = require('path');

gulp.task('revAll', function () {
  return gulp.src([config.paths.build.css + '/*.css', config.paths.build.js + '/*.js'], { base: path.join(process.cwd(), config.paths.build.base) })
    .pipe(revall())
    .pipe(gulp.dest(config.paths.build.base))  // write rev'd assets to build dir
    .pipe(revall.manifest({ fileName: 'manifest.json' }))
    .pipe(gulp.dest(config.paths.build.base)); // write manifest to build dir
});