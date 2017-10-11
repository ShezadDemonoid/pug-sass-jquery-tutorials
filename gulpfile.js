////////////////////////////////////////////////////////////
//Required
////////////////////////////////////////////////////////////

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();

////////////////////////////////////////////////////////////
//Scripts task
////////////////////////////////////////////////////////////

gulp.task('scripts', function () {
  gulp.src(['app/js/**/*.js', '!app/js/**/*/min.js'])
      .pipe(rename({suffix:'.min'}))
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('app/js'));
});

////////////////////////////////////////////////////////////
//Sass task
////////////////////////////////////////////////////////////
gulp.task('styles', function () {
  gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css/'))
    .pipe(browserSync.stream());
});


gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: 'http://localhost:4000/',
  });
});
////////////////////////////////////////////////////////////
//Watch task
////////////////////////////////////////////////////////////
// gulp.task('watch',function(){
//   gulp.watch('./app/js/**/*.js',['scripts']);
//   gulp.watch('./app/sass/**/*.scss',['styles'])
// });
gulp.watch('./app/js/**/*.js', ['scripts']);
gulp.watch('./app/sass/**/*.scss', ['styles'])

////////////////////////////////////////////////////////////
//nodemon task
////////////////////////////////////////////////////////////

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    ext: 'js html'
    
  })
});

////////////////////////////////////////////////////////////
//Default task
////////////////////////////////////////////////////////////

gulp.task('default', ['scripts', 'styles', 'nodemon', 'browser-sync']);