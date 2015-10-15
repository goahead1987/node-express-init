/**
 * Created by liangkuaisheng on 15/10/14.
 * 忽略请求的md5后缀
 */
'use strict';

function testMd5Str (url, len, types) {
    len = len || 8;
    types = types || 'js|css';
    var newUrl = url.replace(new RegExp('@\\w{' + len + '}\\.(' + types + ')'), function ($1) {
        var arr = $1.split('.');
        arr[0] = '';
        return arr.join('.');
    });
    if (newUrl === url) {
        return false;
    }else{
        return newUrl;
    }
}
module.exports =  function(len, types) {
    return function(req, res, next) {
        if (req.method === 'GET') {
            var str = testMd5Str (req.url, len, types);
            if (str !== false) {
                console.log('--dev--:  重定向 %s 到 %s', req.url, str);
                req.url = str;
                req.originalUrl = str;
            }
        }
        return next();
    };
};