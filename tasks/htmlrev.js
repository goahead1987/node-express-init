/**
 * 替换文件版本
 * */
'use strict';

var revReplace = require('gulp-rev-replace');
var processhtml = require('gulp-processhtml');
var replace = require('gulp-replace');

var PATH = {
    src: [
        './src/templates/**/*.html'
    ],
    dst: './build/templates'
};

module.exports = {
    deps: ['copyto', 'jsmin', 'csspackmin'],
    task: function (gulp) {
        var manifestJs = gulp.src("./build/public/ver/rev-manifest-js.json");
        var manifestCss = gulp.src("./build/public/ver/rev-manifest-css.json");
        //console.log(manifest);
        return gulp.src(PATH.src)
            .pipe(revReplace({manifest: manifestJs}))
            .pipe(revReplace({manifest: manifestCss}))
            .pipe(processhtml({}))
            .pipe(replace(/\$\{jscssDomain\}/g, 'http://jscss.com'))
            .pipe(gulp.dest(PATH.dst));
    }
};
