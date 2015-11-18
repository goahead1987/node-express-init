/**
 *
 * */
'use strict';
var webpack = require('webpack');
var gutil = require("gulp-util");
var configRuntime = require('config-realtime');
var config = configRuntime.get('', './webpack.config.js', false);

module.exports = {
    task: function(gulp) {
        webpack(config, function(err, status) {
            if (err) {
                throw new gutil.PluginError("webpack出错了：", err);
            }else{
                var errArr = status.compilation.errors;
                if (errArr.length > 0) {
                    throw new gutil.PluginError("webpack出错了：", errArr.toString());
                }else{
                    gutil.log("[webpack]完成：", status.toString({
                        // output options
                    }));
                }
            }
        });
    }
};