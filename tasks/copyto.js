/**
 * 复制源文件到build
 * */
'use strict';

var PATH = {
    src: [
        './src/**/*',
        '!./src/public/js/**/*',
        '!./src/public/css/**/*.css',
        '!./src/public/web-pack-js'
    ],
    dst: './build'
};

module.exports = {
    deps: ['del'],
    task: function (gulp) {
        return gulp.src(PATH.src)
            .pipe(gulp.dest(PATH.dst));
    }
};
