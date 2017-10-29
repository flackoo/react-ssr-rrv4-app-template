let gulp = require('gulp')
let concat = require('gulp-concat')
let uglify = require('gulp-uglify')
let gulpif = require('gulp-if')
let plumber = require('gulp-plumber')
let autoprefixer = require('gulp-autoprefixer')
let sass = require('gulp-sass')

let plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
  replaceString: /\bgulp[\-.]/
})
let dest = 'public/css/'

let production = process.env.NODE_ENV === 'production'

// gulp.task('styles', function () {
//   return gulp.src('src/client/styles/main.less')
//     .pipe(plumber())
//     .pipe(less())
//     .pipe(autoprefixer())
//     .pipe(gulpif(production, cssmin()))
//     .pipe(gulp.dest('public/styles'))
// })

gulp.task('vendor', function () {
  return gulp.src([
    'bower_components/jquery/dist/jquery.js',
    'bower_components/bootstrap/dist/scripts/bootstrap.js',
    'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
    'bower_components/toastr/toastr.js',
    'bower_components/bootstrap-star-rating/star-rating.min.js'
  ]).pipe(concat('vendor.js'))
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(gulp.dest('public/scripts'))
})

gulp.task('css', function () {
  return gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.css'
  ]).pipe(concat('vendor.css'))
    .pipe(gulpif(production, uglify({ mangle: false })))
    .pipe(gulp.dest('public/css'))
})

gulp.task('default', ['css'])
