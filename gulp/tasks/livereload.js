'use strict';

const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const config      = require('../config');

/**
 * Start browsersync server and watch for changes.
 */
gulp.task('livereload', () => {
  // Start server
  browserSync.init({
    server: { baseDir: 'dist' },
    reloadDebounce: 0,
    logPrefix: 'load',
    notify: false
  });

  // Initialize watcher
  browserSync
    .watch('./dist/**/*.*')
    .on('change', browserSync.reload);
});
