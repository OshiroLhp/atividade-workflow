var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var minifyHtml = require('minify');

 
gulp.task('minify-css', function() {
  return gulp.src('./source/scss/*.scss')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('mini-html', function() {
  return gulp.src('./source/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('background', function(){
    gulp.watch('./source/scss/*.scss',['minify-css']);
    gulp.watch('./source/index.html',['mini-html']);
});