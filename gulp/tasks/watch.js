/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config= require('../../config');
var debug = require('gulp-debug');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.paths.src.sass + '/**', ['sass']);
  gulp.watch(config.paths.src.images + '/**', ['images']);
  gulp.watch(config.paths.src.templates + '/**', ['metalsmith']);
  gulp.watch(config.paths.src.base + '/**', ['metalsmith']);
});
