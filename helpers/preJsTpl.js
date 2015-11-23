/**
 * Created by liangkuaisheng on
 * 预处理js
 */
'use strict';

/***browserify***/
var browserify = require('browserify-middleware');
var reactify = require('reactify');
browserify.settings('transform', ['reactify']);

module.exports = function(req, res, next) {
    var pathStr = 'src/public' + req._parsedUrl.path;
    return browserify(pathStr)(req, res, next);
};
/***browserify***/

/***webpack***/

/***webpack***/