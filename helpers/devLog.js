/**
 * Created by liangkuaisheng on 15/10/14.
 * 输出请求信息
 */
'use strict';
var gutil = require('gulp-util');

module.exports =  function() {
    return function(req, res, next) {
        gutil.log(gutil.colors.magenta('--dev--: ', req.method, req.url));
        return next();
    };
};