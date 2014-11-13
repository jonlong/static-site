var gulp = require('gulp');
var shell = require('gulp-shell');
var config = require('../../config');

gulp.task('ghPages', function() {
  return gulp.src(config.paths.src.base, {read: false})
    .pipe(
      shell([
        'git init .',
        'git add .',
        'git commit -m "Deploy"',
        'git push git@github.com:jonlong/jonlong.github.io master:master --force',
        'rm -rf .git'
      ],
      {
        cwd: config.paths.build.base
      }
    )
  );
});
