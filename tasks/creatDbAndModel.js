/**
 * Created by liangkuaisheng on 15/11/24.
 */
'use strict';
var gutil = require("gulp-util");
var Models = require('main-dir/models/Models');

var User = Models.User;

module.exports = {
    task: function(gulp) {
        User.sync({force: true})
        //User.sync()
        .then(function (res) {
                gutil.log('创建User成功', res);
            });
    }
};