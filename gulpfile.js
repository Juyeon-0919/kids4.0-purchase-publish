const gulp = require('gulp');
// const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const html = require('gulp-file-include');
const del = require('del');
// const htmlbeautify = require('gulp-html-beautify');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');


/* scss TASK*/
function copyScss() {
  return gulp.src('dev/assets/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dev/assets/css/'))
}

function watchScss() {
  gulp.watch('dev/assets/scss/*.scss', gulp.series(copyScss));
}
//
// function watchHtml() {
//   gulp.watch(['src/pages/../*.html'], gulp.series(htmlPage));
// }
//
// function watchInclude() {
//   gulp.watch('src/pages/include/*.html', gulp.series(htmlInclude, htmlPage));
// }
//
// function watchJs() {
//   gulp.watch('src/assets/js/*/*.js', gulp.series(jsLib, jsCommon));
// }
//
// function watchImg() {
//   gulp.watch('src/assets/images/**/*', gulp.series(copyImg));
// }
//
// function watchFont() {
//   gulp.watch('src/assets/fonts/**/**', gulp.series(copyFonts));
// }

//
// function beautify() {
//   var options = {
//     indentSize: 4
//   }
//   return gulp.src('./dist/pages/*.pages')
//     .pipe(htmlbeautify(options))
//     .pipe(gulp.dest('./dist/pages/'))
// }

function delDist() {
  return del('dev/assets/css/');
}
//
// function setEnvProduct(cb) {
//   process.env.NODE_ENV = 'product';
//   cb();
// }
//
// function setEnvDevelope(cb) {
//   process.env.NODE_ENV = 'develope'
//   cb();
// }


//task
gulp.task("dev", gulp.series(delDist, copyScss, watchScss));
gulp.task("dist", gulp.series(delDist));
// gulp.task("watch", gulp.parallel(watchScss, watchHtml, watchInclude, watchJs, watchImg, watchFont, ));
//
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: {
//       baseDir: "./",
//       index: "dist/index.html"
//     }
//   });
//   gulp.watch('src/assets/scss/**/*.scss', gulp.series(copyScss)).on('change', browserSync.reload);
//   gulp.watch(['src/pages/**/*.html'], gulp.series(htmlPage)).on('change', browserSync.reload);
//   gulp.watch('src/pages/include/*.html', gulp.series(htmlInclude, htmlPage)).on('change', browserSync.reload);
//   gulp.watch('src/assets/images/**/*', gulp.series(copyImg)).on('change', browserSync.reload);
//   gulp.watch('src/assets/fonts/**/**', gulp.series(copyFonts)).on('change', browserSync.reload);
// });

exports.default = gulp.series("dist");
