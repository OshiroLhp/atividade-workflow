var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyHtml = require('gulp-htmlmin');

 
gulp.task('minify-css', function() {
  return gulp.src('./source/scss/*.scss')
  	.pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('mini-html', function() {
  return gulp.src('./source/*.html')
  	.pipe(minifyHtml({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('background', function(){
    gulp.watch('./source/scss/*.scss',['minify-css']);
    gulp.watch('./source/index.html',['mini-html']);
});