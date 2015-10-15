/**
 * 清除所有的build文件
 * */
'use strict';
var del = require('del');

module.exports = {
    task: function(gulp) {
        del.sync('build');
    }
};
