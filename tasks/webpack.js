/**
 * 使用webpack打包
 * */
'use strict';
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var gutil = require("gulp-util");
var rename = require("gulp-rename");
var configRuntime = require('config-realtime');
var objectAssign = require('object-assign');

module.exports = {
    deps: ['delWebpackjs', 'entries'],
    task: function (gulp) {
        var config = configRuntime.get('', './webpack.config.js', true);
        var entries = configRuntime.get('', './build/public/ver/gulp-search-menifest.json', true);
        config.output.path = '/'; // gulp报错
        config.entry = objectAssign(config.entry, entries);
        var basePath = './src/public/';
        return gulp.src([basePath + 'js/**/*.js'])
            .pipe(gulpWebpack(config))
            // 使用entries ，不需要rename
            //.pipe(rename(function (path) {
            //    var key = path.basename;
            //    if (typeof entry[key] !== 'undefined') {
            //        var pathArr = entry[key].replace(basePath, './').split('/');
            //        var basename = pathArr.pop();
            //        path.dirname = pathArr.join('/');
            //        path.basename = basename;
            //    }
            //}))
            .pipe(gulp.dest('build/public/web-pack-js'));
    }
};