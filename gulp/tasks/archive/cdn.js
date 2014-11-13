var gulp = require('gulp');
var awspublish = require('gulp-awspublish');
var cloudfront = require('gulp-cloudfront');
var secrets = require('../../config/secrets');
var config = require('../../config/app');
var handleErrors = require('../util/handleErrors');
var path = require('path');
var gutil = require('gulp-util');
var fs = require('fs');

var aws = {
  key: secrets.cdn.key,
  secret: secrets.cdn.secret,
  bucket: secrets.cdn.bucket,
  region: secrets.cdn.region,
  distributionId: secrets.cdn.distributionId
};

var publisher = awspublish.create(aws);
var headers = {'Cache-Control': 'max-age=315360000, no-transform, public'};

gulp.task('cdn', function () {
  return gulp.src([config.paths.build.css + '/*.css', config.paths.build.js + '/*.js'], { base: path.join(process.cwd(), config.paths.build.base) })
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
    .pipe(cloudfront(aws));
});