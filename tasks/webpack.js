/**
 *
 * */
'use strict';
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var gutil = require("gulp-util");
var rename = require("gulp-rename");
var configRuntime = require('config-realtime');
var config = configRuntime.get('', './webpack.config.js', false);
config.output.path = '/'; // gulp报错
var entry = config.entry;
module.exports = {
    deps: ['del'],
    task: function(gulp) {
        var basePath = './src/public/js';
        return gulp.src(basePath + '/**/*.js')
            .pipe(gulpWebpack(config))
            .pipe(rename(function (path) {
                var key = path.basename;
                if (typeof entry[key] !== 'undefined') {
                    var pathArr = entry[key].replace(basePath, './').split('/');
                    var basename = pathArr.pop();
                    path.dirname = pathArr.join('/');
                    path.basename = basename;
                }

            }))
            .pipe(gulp.dest('build/public/web-pack-js'));
    }
};