/**
 * 复制源文件到build
 * */
'use strict';

var PATH = {
    src: [
        './src/**/*',
        '!./src/public/js/**/*'
    ],
    dst: './build'
};

module.exports = {
    deps: ['del'],
    task: function copyto(gulp) {
        return gulp.src(PATH.src)
            .pipe(gulp.dest(PATH.dst));
    }
};
