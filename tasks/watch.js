'use strict';

var nodemon = require('gulp-nodemon');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');

module.exports = {
    task: function(gulp) {

        livereload.listen();

        var PORT = gulp.env.PORT || 8001;
        var NODE_ENV = gulp.env.NODE_ENV || 'dev';

        function startServer() {
            // gulp watch --PORT 8001 --NODE_ENV dev
            nodemon({
                script: 'index.js',
                nodeArgs: ['--debug'],
                ext: 'js json',
                env: {
                    'PORT': PORT,
                    'NODE_ENV': NODE_ENV
                },
                watch: [
                    'index.js',
                    'app.js',
                    'controllers/',
                    'config/',
                    'helpers/'
                ]
            }).on('start', function () {
                gutil.log(gutil.colors.green('server启动，端口：', PORT, '，环境：', NODE_ENV, '..................'));
            }).on('restart', function () {
                gutil.log(gutil.colors.green('server重启，端口：', PORT, '，环境：', NODE_ENV, '..................'));
            }).on('crash', function () {
                gutil.log(gutil.colors.green('server宕机，端口：', PORT, '，环境：', NODE_ENV, '..................'));
            }).on('exit', function () {
                gutil.log(gutil.colors.green('server关闭，端口：', PORT, '，环境：', NODE_ENV, '..................'));
            });
        }


        function webpackRealTime(taskName) {
            // 实时打包js
            var basePath = './src/public/js';
            watch([basePath + '/**/*.js', 'webpack.config.js'], function (file) {
                gutil.log(gutil.colors.green('webpack: js文件变化，重新打包................'));
                gulp.run(taskName, function () {
                    gutil.log(gutil.colors.green('webpack: 打包完成.........'));
                    gutil.log(gutil.colors.green('livereload: 刷新页面.........'));
                    livereload.changed(file);
                });
            });
        }

        function ReFreshBrowser(filesList) {
            // 监控到js打包文件变化，刷新浏览器
            watch(filesList, function (file) {
                gutil.log(gutil.colors.green('livereload: 刷新页面.........'));
                livereload.changed(file);
            });
        }

        function WatchFiles(filesList, taskName) {
            // 监控到filesList文件变化，刷新浏览器
            watch(filesList, function (file) {
                gutil.log(gutil.colors.green('livereload: 文件变化刷新页面................'));
                if (taskName) {
                    gulp.run(taskName, function () {
                        gutil.log(gutil.colors.green(taskName + ': task完成.........'));
                        gutil.log(gutil.colors.green('livereload: 刷新页面.........'));
                        livereload.changed(file);
                    });
                }else{
                    gutil.log(gutil.colors.green('livereload: 刷新页面.........'));
                    livereload.changed(file);
                }
            });
        }

        function DevFresh() {

            //webpackRealTime('webpack');
            WatchFiles(['./src/public/js/**/*.js', 'webpack.config.js'], 'webpack');
            WatchFiles(['src/templates/**/*', './src/public/css/**/*']);

            //ReFreshBrowser(['build/public/web-pack-js/**']);

            startServer();
        }

        function NonDevFresh() {

            //webpackRealTime('default');
            WatchFiles(['./src/public/js/**/*.js', 'webpack.config.js'], 'default');
            WatchFiles(['src/templates/**/*', './src/public/css/**/*'], 'htmlrev');

            //ReFreshBrowser(['build/public/js/**']);

            startServer();
        }

        if (NODE_ENV === 'dev') {
            gulp.run('csspackmin', 'webpack', 'jspack', DevFresh);
        }else{
            gulp.run('default', NonDevFresh);
        }
    }
};
