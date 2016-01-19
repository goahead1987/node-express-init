/**
 * 压缩js文件
 * */
'use strict';

var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var addsrc = require('gulp-add-src');

var PATH = {
    src: [
        './build/public/web-pack-js/**/*.js',
        '!./build/public/web-pack-js/lib-modules.js'
    ],
    dst: './build/public/js'
};

module.exports = {
    deps: ['webpack', 'jspack'],
    task: function (gulp) {
        return gulp.src(PATH.src)
            .pipe(uglify({
                mangle: {except: ['$']}
            }))
            .pipe(addsrc('./build/public/web-pack-js/lib-modules.js'))
            .pipe(rev())
            .pipe(gulp.dest(PATH.dst))
            .pipe(rev.manifest({
                path: 'rev-manifest-js.json',
                merge: false
            }))
            .pipe(gulp.dest('build/public/ver'));
    }
};
