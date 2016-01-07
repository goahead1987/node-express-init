/**
 * Created by liangkuaisheng on
 * 预处理js
 */
'use strict';
var path = require('path');
var url = require('url');

/***browserify***/
//var browserify = require('browserify-middleware');
//var reactify = require('reactify');
//browserify.settings({
//    'transform': reactify
//});//, {"es6": true}
//
//module.exports = function(req, res, next) {
//    var pathStr = 'src/public' + req._parsedUrl.path;
//    return browserify(pathStr)(req, res, next);
//};
/***browserify***/

/***webpack***/
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");

var configRuntime = require('config-realtime');
var config = configRuntime.get('', './webpack.config.js', false);


module.exports = function (req, res, next) {
    var originalUrl = req.originalUrl,
        urlObj = url.parse(originalUrl),
        pathname = urlObj.path,
        dir = path.dirname(pathname),
        filename = path.basename(pathname, '.js'),
        entry = {},
        outputPath = path.join('/src/public/', dir),
        publicPath = url.resolve('http://node.com', dir);

    entry[filename] = './' + path.join('./src/public/', pathname);

    config.output.path = outputPath;
    config.entry = entry;

    var compiler = webpack(config);
    return webpackDevMiddleware(compiler, {
        lazy: true,
        publicPath: publicPath  //  "http://node.com/js/register"
    })(req, res, next);
};

/***webpack***/