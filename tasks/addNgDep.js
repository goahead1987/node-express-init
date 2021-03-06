/**
 * 压缩前添加 angular 依赖
 * */
'use strict';

var ngAnnotate = require('gulp-ng-annotate');

var PATH = {
    src: [
        './build/public/**/*.js'
    ],
    dst: './build/public/'
};

module.exports = {
    deps: ['copyto'],
    task: function jsmin(gulp) {
        return gulp.src(PATH.src)
            .pipe(ngAnnotate({
                //remove: true,
                add: true,
                single_quotes: true
            }));
            //.pipe(gulp.dest(PATH.dst));
    }
};
