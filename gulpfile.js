//initialize all of our variables
var app, base, concat, directory, gulp, gutil, hostname, path, refresh, sass, uglify, imagemin, minifyCSS, del, browserSync, autoprefixer, gulpSequence, shell, sourceMaps;

var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];

//load all of our dependencies
//add more here if you want to include more libraries
gulp        = require('gulp');
gutil       = require('gulp-util');
// concat      = require('gulp-concat');
// uglify      = require('gulp-uglify');
sass        = require('gulp-sass');
sourcemaps  = require('gulp-sourcemaps');
// imagemin    = require('gulp-imagemin');
// minifyCSS   = require('gulp-minify-css');
browserSync = require('browser-sync');
// autoprefixer = require('gulp-autoprefixer');
// gulpSequence = require('gulp-sequence').use(gulp);
// shell       = require('gulp-shell');

gulp.task('browser:sync', function() {
  browserSync({
    server: {
      baseDir: "dist/",
      routes: {
        "/config.js": "config.js",
        "/js/jspm_packages": "jspm_packages"
      }
    },
    options: {
      reloadDelay: 250
    },
    notify: false
  });
});

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

gulp.task('scripts', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function() {
  return gulp.src('app/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    //catch errors
    .on('error', gutil.log)
    //where to save our final, compressed css file
    .pipe(gulp.dest('dist/css'))
    //notify browserSync to refresh
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('static', function() {
  return gulp.src('app/*.+(html|xml|txt)')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}))
    .on('error', gutil.log);
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

gulp.task('default', ['browser:sync', 'scripts', 'styles', 'static', 'fonts'], function() {
    //a list of watchers, so it will watch all of the following files waiting for changes
    gulp.watch('app/scripts/**', ['scripts']);
    gulp.watch('app/styles/**', ['styles']);
    gulp.watch('app/images/**', ['images']);
    gulp.watch('app/fonts/**', ['fonts']);
    gulp.watch('app/*.+(html|xml|txt)', ['static']);
});
