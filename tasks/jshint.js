/**
 * 使用jshint检查代码
 * */
'use strict';
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var configRuntime = require('config-realtime');

var jshintOpt = {};
jshintOpt =  configRuntime.get('', 'config/jshint.json', false);

module.exports = {
    task: function(gulp) {
        gulp.src('./public/js/**/*.js')
            .pipe(jshint(jshintOpt))
            .pipe(jshint.reporter(stylish))
            .pipe(jshint.reporter('fail'));
    }
};
