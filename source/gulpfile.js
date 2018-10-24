// 各プラグインの読み込み ############################################
const browserSync = require('browser-sync');
const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const paths = {
  'pug': './src/pug/',
  'sass': './src/sass/',
  'html': './pub/html/',
  'css': './pub/css/',
};
const errorHandler = function(error) {
  notifier.notify({
    message: 'コンパイルに失敗しました',
    title: 'Pug Error'
  }, function () {
    console.log(error.message);
  });
};
// ###############################################################

// Pug
gulp.task('pug', function(){
  gulp.src(paths.pug + '*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest(paths.html));
});

gulp.task('default', function(){
  // Sass
  gulp.watch(paths.sass + '*.sass', function(){
    gulp.src(paths.sass + '*.sass')
    .pipe(sass({
        outputStyle: 'compressed'
      })
      .on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
  });

});

// gulp.task('connect', function(){
//   connect.server({
//     root: paths.html + '*.html',
//     livereload: true
//   });
// });
