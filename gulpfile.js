//initialize all of our variables
var app, base, concat, directory, gulp, gutil, hostname, path, refresh, sass, uglify, imagemin, minifyCSS, del, browserSync, autoprefixer, gulpSequence, shell, sourceMaps;

var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

//load all of our dependencies
//add more here if you want to include more libraries
var gulp        = require('gulp');
var gutil       = require('gulp-util');
// concat      = require('gulp-concat');
// uglify      = require('gulp-uglify');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
// imagemin    = require('gulp-imagemin');
// minifyCSS   = require('gulp-minify-css');
var browserSync = require('browser-sync');
// autoprefixer = require('gulp-autoprefixer');
// gulpSequence = require('gulp-sequence').use(gulp);
// shell       = require('gulp-shell');
var watchify    = require('watchify');
var browserify  = require('browserify');
var path        = require('path');
var source      = require('vinyl-source-stream');
var tap         = require('gulp-tap');

// gulp.task('images', function(tmp) {
//     gulp.src(['app/images/*.jpg', 'app/images/*.png'])
//         .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
//         .pipe(gulp.dest('app/images'));
// });

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(browserSync.reload({stream: true}));
});

var bundler;
gulp.task('scripts', function() {
  if (!bundler) {
    bundler = watchify(browserify({
      entries: path.join(path.resolve(__dirname, '.'), 'app', 'scripts', 'main'),
      debug: true,
      paths: ['./node_modules', './app/scripts'],
      cache: {},
      packageCache: {}
    }));
    bundler.transform('babelify');
  }

  return bundler.bundle()
    .pipe(source('main.js'))
    .pipe(tap(function(file, x) {
      console.log('Here 1');
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(tap(function(file, x) {
      console.log('Here 2');
    }))
    .pipe(browserSync.reload({stream:true}))
    .pipe(tap(function(file, x) {
      console.log('Here 3');
    }));
});



gulp.task('scripts:old', function() {
  return gulp.src('app/scripts/**/*.js')
    .on('error', gutil.log)
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
  return gulp.src('app/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .on('error', gutil.log)
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('static', function() {
  return gulp.src('app/*.+(html|xml|txt)')
    .on('error', gutil.log)
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

// //cleans our dist directory in case things got deleted
// gulp.task('clean', function() {
//     return shell.task([
//       'rm -rf dist'
//     ]);
// });
//
// //create folders using shell
// gulp.task('scaffold', function() {
//   return shell.task([
//       'mkdir dist',
//       'mkdir dist/fonts',
//       'mkdir dist/images',
//       'mkdir dist/scripts',
//       'mkdir dist/styles'
//     ]
//   );
// });

gulp.task('default', ['scripts', 'styles', 'static', 'fonts'], function() {
    browserSync({
      server: {
        baseDir: "./dist",
      },
      options: {
        reloadDelay: 250
      },
      notify: true,
    });
    //a list of watchers, so it will watch all of the following files waiting for changes
    gulp.watch('app/scripts/**', ['scripts']);
    gulp.watch('app/styles/**', ['styles']);
    gulp.watch('app/images/**', ['images']);
    gulp.watch('app/fonts/**', ['fonts']);
    gulp.watch('app/*.+(html|xml|txt)', ['static']);
});
