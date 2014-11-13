var gulp = require('gulp');
var shell = require('gulp-shell');
var config = require('../../config');

gulp.task('travis', ['build'], function() {
  gulp.src(config.paths.src.base, {read: false})
    .pipe(
      shell([
        'git init .',
        'git add .',
        'git commit -m "Deploy"',
        'git push "https://$GH_TOKEN@$GH_REF" master:master --force'
      ],
      {
        cwd: config.paths.build.base
      }
    )
  );
});
