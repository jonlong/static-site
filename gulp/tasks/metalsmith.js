/*jshint multistr: true */

var gulp = require('gulp');
var filter = require('gulp-filter');
var gulpsmith = require('gulpsmith');
var frontMatter = require('gulp-front-matter');
var plumber = require('gulp-plumber');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');
var untemplatize = require('metalsmith-untemplatize');
var shortcodes = require('metalsmith-flexible-shortcodes');
var _ = require('lodash');
var path = require('path');
var swig = require('swig');
var swigExtras = require('swig-extras');
var config = require('../../config');

var NODE_ENV = process.env.NODE_ENV || 'development';
var BASE_URL = process.env.BASE_URL || config.blog.baseURL;

var buildResponsiveImageMarkup = function(params) {
  return '<picture>\
              <!--[if IE 9]><video style="display: none;"><![endif]-->\
              <source srcset="' + config.paths.build.images + '/' + params.lg + '" media="(min-width: 1000px)">\
              <source srcset="' + config.paths.build.images + '/' + params.md + '" media="(min-width: 800px)">\
              <!--[if IE 9]></video><![endif]-->\
              <img srcset="' + config.paths.build.images + '/' + params.sm + '" alt="' + params.alt + '">\
          </picture>';
};

var buildCaptionedImageMarkup = function(params) {
  var image = buildResponsiveImageMarkup(params);

  return '<figure class="media">\
              ' + image + '\
              <figcaption class="media__caption">' + params.caption + '</figcaption>\
          </figure>';
};

/**
 * Swig Extensions
 */

swig.setDefaults({ cache: false });
swigExtras.useFilter(swig, 'markdown');

/**
 * Metalsmith task
 */

gulp.task('metalsmith', function() {
  var frontMatterFilter = filter('**/*.{html,md}'); // filter out files with front matter

  return gulp.src(config.paths.src.base + '/**/*')
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
      }
    }))
    .pipe(frontMatterFilter)
    // grab files with front matter and assign them as a property so metalsmith will find it
    .pipe(frontMatter({
      property: 'frontMatter'
    })).on('data', function(file) {
        _.assign(file, file.frontMatter);
        delete file.frontMatter;
    })
    // remove the filter (back to everything in /src) and let metalsmith do its thing
    .pipe(frontMatterFilter.restore())
    .pipe(
      gulpsmith()
        .metadata({
          env: NODE_ENV,
          BASE_URL: BASE_URL,
          now: new Date(),
          blog: config.blog
        })
        // Use shortcodes for custom markdown tags
        .use(shortcodes({
          shortcodes: {
              'captioned-image': function(str, params) {
                var image = buildCaptionedImageMarkup(params);
                return image;
            },
            'image': function(str, params) {
              var image = buildResponsiveImageMarkup(params);
              return image;
            }
          }
        }))
        .use(markdown({
          gfm: true,
          smartypants: true
        }))
        .use(collections({
          posts: {
            pattern: 'posts/*'
          }
        }))
        .use(permalinks({
          pattern: ':title'
        }))
        .use(untemplatize())
        .use(templates({
          engine: 'swig',
          directory: config.paths.src.templates
        }))
    )
    .pipe(gulp.dest(config.paths.build.base));
});