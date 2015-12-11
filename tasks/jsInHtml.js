/**
 * 替换文件版本
 * */
'use strict';

var path = require('path');
var processhtml = require('gulp-processhtml');
var ghtmlSrc = require('gulp-extract-entries');//还有问题 todo
var rename = require("gulp-rename");

var PATH = {
    src: [
        './src/templates/**/*.html'
    ],
    dst: './build/public/js-entry'
};

module.exports = {
    deps: ['copyto'],
    task: function (gulp) {

        return gulp.src(PATH.src)
            .pipe(rename(function (path) {
                console.log(path);
            }))
            .pipe(ghtmlSrc({
                basePath: path.join(__dirname, '../src/public'),
                getFileName: function (node) {
                    return node.attr('src');
                }
            }))
            .pipe(rename(function (path) {
                console.log(path);
            }))
            .pipe(rename(function (path) {
                console.log(path);
            }));
            //.pipe(gulp.dest(PATH.dst));
    }
};
