/**
 * Created by liangkuaisheng on 15/10/14.
 * 输出请求信息
 */
'use strict';

module.exports =  function() {
    return function(req, res, next) {
        console.log('--dev--:  %s %s', req.method, req.url);
        return next();
    };
};