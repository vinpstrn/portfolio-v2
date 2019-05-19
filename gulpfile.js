const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

function style() {
    return gulp.src('scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' 
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream())
}

function js() {
    return gulp.src('dist/js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
}

function optimizeImage() {
    return gulp.src('test/*')
        .pipe(imagemin())
        .pipe(gulp.dest('res'))
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'dist/'
        }
    });

    gulp.watch('scss/**/*.scss', style);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
    gulp.watch('dist/js/**/*.js').on('change', browserSync.reload);
}
  
exports.style = style;
exports.watch = watch;
exports.js = js;
exports.optimizeImage = optimizeImage;