/**
 * 复制源文件到build
 * */
'use strict';

var PATH = {
    src: [
        './public/favicon.ico',
        './public/images/**/*'
    ],
    dst: './build/public/'
};

module.exports = {
    deps: ['del'],
    task: function copyto(gulp) {
        return gulp.src(PATH.src)
            .pipe(gulp.dest(PATH.dst));
    }
};
