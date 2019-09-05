

const { src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglifyJs = require('gulp-uglify');
sass.compiler = require('node-sass');

function compileScss() {
  return src('./hw1/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('./hw1/min-css'));
}

function minJs() {
  return src('./hw1/*.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(uglifyJs())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./hw1/js'));
}


exports.compileScss = compileScss;
exports.minJs = minJs;
exports.default = parallel(compileScss, minJs);
