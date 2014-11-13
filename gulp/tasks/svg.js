var gulp = require('gulp');
var sprite = require('gulp-svg-sprites');
var raster = require('gulp-raster');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var debug = require('gulp-debug');
var merge = require('merge-stream');
var config = require('../../config');
var path = require('path');

/**
 * This path gets written into the generated CSS, and
 * needs to be relative to the final, built file.
 */
var svgFileName = 'icons';

/*
  Minifies and combines SVG files into a sprite sheet, creates
  PNG fallbacks, and generates sprite CSS.
 */

gulp.task('svg', function(callback) {

  var svg = gulp.src(config.paths.src.images + '/**/*.svg')
    .pipe(svgmin())
    .pipe(sprite({
      preview: false,
      mode: 'symbols',
      svg: {
        symbols: config.paths.build.images + '/' + svgFileName + '.svg'
      }
    }))
    .pipe(gulp.dest(process.cwd()));

  var png = gulp.src(config.paths.src.images + '/**/*.svg')
    .pipe(raster())
    .pipe(rename(function(path) {
      path.basename = svgFileName + '.svg.' + path.basename;
      path.extname = '.png';
    }))
    .pipe(flatten())
    .pipe(gulp.dest(config.paths.build.images));

  return merge(svg, png);
});