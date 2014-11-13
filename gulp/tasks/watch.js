var gulp = require('gulp');
var config = require('../../config');
var tinylr = require('tiny-lr')();

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('watch', function() {
  
  tinylr.listen();

  gulp.watch(config.paths.src.sass + '/**', ['sass']);
  gulp.watch(config.paths.src.templates + '/**', ['metalsmith']);
  gulp.watch(config.paths.src.base + '/**', ['metalsmith']);
  // gulp.watch(config.paths.src.img + '/**', ['images']);
  gulp.watch(config.paths.build + '/**', notifyLiveReload);
});