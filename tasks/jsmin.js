/**
 * 压缩js文件
 * */
'use strict';

var uglify = require('gulp-uglify');
var rev = require('gulp-rev');

var PATH = {
    src: [
        './build/public/web-pack-js/**/*.js'
    ],
    dst: './build/public/js'
};

module.exports = {
    deps: ['webpack'],
    task: function (gulp) {
        return gulp.src(PATH.src)
            .pipe(uglify({
                mangle: {except: ['$']}
            }))
            .pipe(rev())
            .pipe(gulp.dest(PATH.dst))
            .pipe(rev.manifest({merge: false}))
            .pipe(gulp.dest('build/public/ver'));
    }
};
