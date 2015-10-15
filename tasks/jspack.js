/**
 * 打包js文件
 * */
'use strict';

var concat = require('gulp-concat');

var PATH = {
    src: './build/public/js/**/*.js',
    dst: './build/public/'
};

module.exports = {
    deps: ['copyto'],
    task: function jsmin(gulp) {
        return gulp.src(PATH.src)
            .pipe(concat('all.js'))
            .pipe(gulp.dest(PATH.dst));
    }
};
