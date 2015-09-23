var gulp     = require('gulp'),
browserify   = require('browserify'),
source       = require('vinyl-source-stream'),
buffer       = require('vinyl-buffer'),
reactify     = require('reactify'),
htmlmin      = require('gulp-html-minifier'),
uglify       = require('gulp-uglify'),
browserSync  = require('browser-sync'),
sass         = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('./src/css/*.scss')
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(gulp.dest('./css/'))
});

gulp.task('browser-sync', ['bundle', 'sass'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
        port: 2299
  });
});

gulp.task('watch-all', ['bundle', 'sass'], browserSync.reload);

gulp.task('bundle', ['htmlMinify'], function() {
  return browserify('./src/js/app.js')
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./js/'))
});
gulp.task('htmlMinify', function() {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./'))
});
gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['watch-all']);
});

gulp.task('default', ['watch', 'browser-sync']);