var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    reactify = require('reactify'),
    htmlmin = require('gulp-html-minifier'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', ['bundle'], function() {
  browserSync.init({
    server: {
      baseDir: './build/'
    },
        port: 2299
  });
});

gulp.task('watch-js', ['bundle'], browserSync.reload);

gulp.task('bundle', ['htmlMinify'], function() {
  return browserify('./src/js/app.js')
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./build/js/'))
});
gulp.task('htmlMinify', function() {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./build'))
});
gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['watch-js']);
});

gulp.task('default', ['watch', 'browser-sync']);