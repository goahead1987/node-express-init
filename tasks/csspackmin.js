/**
 * 打包 压缩 css文件
 * */
'use strict';

var concat = require('gulp-concat');
var importCss = require('gulp-import-css');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');

var PATH = {
    src: './src/public/css/**/*.css',
    dst: './build/public/css'
};

module.exports = {
    deps: ['copyto'],
    task: function (gulp) {
        return gulp.src(PATH.src)
            .pipe(importCss())
            .pipe(cssnano())
            .pipe(rev())
            .pipe(gulp.dest(PATH.dst))
            .pipe(rev.manifest({
                path: 'rev-manifest-css.json',
                merge: false
            }))
            .pipe(gulp.dest('build/public/ver'));
    }
};
