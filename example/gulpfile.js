'use strict';

var fileinclude = require('..'),
  gulp = require('gulp');

gulp.task('include', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: {
        name: 'example'
      }
    }))
    .pipe(gulp.dest('./result'));
});
