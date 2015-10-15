/**
 * 压缩js文件
 * */
'use strict';

var uglify = require('gulp-uglify');

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
            .pipe(uglify({
                mangle: {except: ['$']}
            }))
            .pipe(gulp.dest(PATH.dst));
    }
};
