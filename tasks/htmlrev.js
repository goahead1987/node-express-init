/**
 * 替换文件版本
 * */
'use strict';

var revReplace = require('gulp-rev-replace');
var processhtml = require('gulp-processhtml');

var PATH = {
    src: [
        './build/templates/**/*.html'
    ],
    dst: './build/templates'
};

module.exports = {
    deps: ['jsmin'],
    task: function (gulp) {
        var manifest = gulp.src("./build/public/ver/rev-manifest.json");
        //console.log(manifest);
        return gulp.src(PATH.src)
            .pipe(revReplace({manifest: manifest}))
            .pipe(processhtml({}))
            .pipe(gulp.dest(PATH.dst));
    }
};
