/**
 * Created by liangkuaisheng on 16/01/04.
 *
 */
'use strict';

//var session = require('express-session');
var cookieSession = require('cookie-session');

//var sess = session({
//    resave: true,
//    saveUninitialized: true,
//    secret: '37f5abe72ecfe521b15289c7675e7b6c', //secret的值建议使用随机字符串,lks_secret md5
//    cookie: {maxAge: 60 * 1000 * 5} // 过期时间（毫秒）
//});

var cookieSess = cookieSession({
    name: 'imgcodesession',
    //      lks_cookie_key                     lks_session_key
    keys: ['0251feae453b8548f241a2436e75517f', '06700cbaa49ddb1a2dde98ee489de912']
});

var urlMap = [
    '/login',
    '/register',
    '/tools/getcodeimg'
];

module.exports = function (app) {
    urlMap.forEach(function (item, key) {
        //app.use(item, sess);
        app.use(item, cookieSess);
    });
};