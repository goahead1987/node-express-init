/**
 * 清除所有的web-pack-js文件
 * */
'use strict';
var del = require('del');

module.exports = {
    deps: ['eslint'],
    task: function(gulp) {
        del.sync('build/public/web-pack-js');
    }
};
