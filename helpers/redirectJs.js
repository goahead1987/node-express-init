/**
 * Created by liangkuaisheng on
 * dev环境重定向js
 */
'use strict';
var path = require('path');
var url = require('url');
var fs = require('fs');

/***dev环境重定向***/

module.exports = function (req, res, next) {
    var originalUrl = req.originalUrl,
        urlObj = url.parse(originalUrl),
        pathname = urlObj.path,
        devPath = pathname.replace('/js/', '/web-pack-js/'),
        absolutePath = '/Users/liangkuaisheng/wspro/node-express-init/build/public' + devPath;

    // 直接返回文件
    //try{
    //    var text = '//dev环境，文件经过重定向！\n' + fs.readFileSync(absolutePath, "utf8");
    //    res.send(text);
    //    //res.send(new Buffer(text));
    //}catch (err) {
    //    res.send('alert("' + absolutePath + ' : 文件不存在，请将文件加入入口列表并重新编译！");//dev环境，文件经过重定向！\n//文件不存在，请重新编译！\n//' + err.toString());
    //}

    //需要 ln -s ../../build/public/web-pack-js ./src/public/web-pack-js
    req.url = req.url.replace('/js/', '/web-pack-js/');
    next();

    //需要 ln -s ../../build/public/web-pack-js ./src/public/web-pack-js
    //res.redirect(devPath);
};

/***dev环境重定向***/