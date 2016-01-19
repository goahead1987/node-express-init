/**
 * 打包js文件
 * */
'use strict';

var concat = require('gulp-concat');

var baseModulePath = './src/public/node_modules/';
var PATH = {
    src: [
        baseModulePath + 'react/dist/react.min.js',
        baseModulePath + 'react-dom/dist/react-dom.min.js',
        baseModulePath + 'amazeui-touch/dist/amazeui.touch.min.js',
        baseModulePath + 'redux/dist/redux.min.js',
        baseModulePath + 'react-redux/dist/react-redux.min.js',
        baseModulePath + 'redux-logger/dist/index.min.js',
        baseModulePath + 'jquery/dist/jquery.min.js'
    ],
    dst: './build/public/web-pack-js/'
};

module.exports = {
    deps: ['delWebpackjs'],
    task: function (gulp) {
        return gulp.src(PATH.src)
            .pipe(concat('lib-modules.js'))
            .pipe(gulp.dest(PATH.dst));
    }
};
