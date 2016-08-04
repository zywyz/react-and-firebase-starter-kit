var gulp = require("gulp");
var gutil = require("gulp-util");
var gulpif = require('gulp-if');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var webpackBuildConfig = require("./webpack.build.config.js");

var uglify = require('gulp-uglify');

var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var runSequence = require('run-sequence');
var plumber = require('gulp-plumber');

var del = require('del');

var BUILD = false;

var path = {
  CSS: 'src/**/*.scss',
  CSS_ENTRY: 'src/css/style.scss',
  IMG: 'src/img/*',
  JS: ['src/**/*.js', 'src/**/*.jsx', '!**/__tests__/*'],
  JS_ENTRY: 'src/js/App.js',
  HTML: 'src/index.html',
  FONTS: 'src/fonts/*',
  FAVICON: 'src/favicon.ico',

  DEST: 'dev',
  DEST_CSS: 'dev/css',
  DEST_IMG: 'dev/img',
  DEST_JS: 'dev/js',
  DEST_FONTS: 'dev/fonts/bootstrap'
};

var onError = function(err) {
  console.log(err);
};

gulp.task('production', function() {
  BUILD = true;

  path.DEST = 'public';
  path.DEST_CSS = 'public/css';
  path.DEST_IMG = 'public/img';
  path.DEST_JS = 'public/js';
  return;
});

gulp.task('clean', function(){
  return del.sync(path.DEST);
});

gulp.task('copyIndex', function() {
  var manifest1 = gulp.src(path.DEST_JS + "/rev-manifest.json");
  var manifest2 = gulp.src(path.DEST_JS + "/manifest.json");

  gulp.src(path.HTML)
    .pipe(gulpif(BUILD, revReplace({ manifest: manifest1 })))
    .pipe(gulpif(BUILD, revReplace({ manifest: manifest2 })))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('copyFonts', function() {
  gulp.src(path.FONTS)
    .pipe(gulp.dest(path.DEST_FONTS));
});

gulp.task('img', function() {
  gulp.src(path.IMG)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(gulp.dest(path.DEST_IMG));
});

gulp.task('css', function() {
  gulp.src('src/css/style.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulpif(BUILD, cleanCSS()))
    .pipe(gulpif(BUILD, rev()))
    .pipe(gulp.dest(path.DEST_CSS))
    .pipe(gulpif(BUILD, rev.manifest()))
    .pipe(gulpif(BUILD, gulp.dest(path.DEST_JS)));
});

gulp.task("webpack-dev-server", function(callback) {
  // Start a webpack-dev-server
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  new WebpackDevServer(webpack(myConfig), {
    publicPath: myConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: 'dev',
    stats: {
      chunks: false,
      chunkModules: false,
      colors: true
    }
  }).listen(8181, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:8181/');
  });
});

gulp.task('jsBuild', function (callback) {
  webpack(webpackBuildConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});

gulp.task('clean-manifests', function(){
  del(path.DEST_JS + "/manifest.json");
  del(path.DEST_JS + "/rev-manifest.json");
});

gulp.task('browser-sync', function() {
  var files = [
    path.DEST_JS + '/*.js',
    path.DEST + '/*.html',
    path.DEST_CSS + '/*.css',
    path.DEST_IMG + '/*'
  ];

  browserSync.init(files, {
    proxy: 'localhost:8181'
  })
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(path.CSS, ['css']);
  gulp.watch(path.HTML, ['copyIndex']);
  gulp.watch(path.IMG, ['img']);
});

gulp.task('dev', function() {
  runSequence('clean', ['watch', 'copyIndex', 'copyFonts', 'css', 'img', 'webpack-dev-server']);
});

gulp.task('default', ['dev']);

gulp.task('build', function() {
  runSequence('production', 'clean', ['copyFonts', 'css', 'img', 'jsBuild'], 'copyIndex', 'clean-manifests');
});
