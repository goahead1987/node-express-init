/**
 * Created by liangkuaisheng on 15/11/24.
 */
'use strict';
var gutil = require("gulp-util");
var Models = require('main-dir/models/Models');

var User = Models.User;
var UserMid = Models.UserMid;
var Msg = Models.Msg;

module.exports = {
    task: function (gulp) {
        User.sync()
            .then(function (res) {
                gutil.log('创建User成功', res);
            })
            .then(function () {
                return UserMid.sync()
            })
            .then(function (res) {
                gutil.log('创建UserMid成功', res);
            })
            .then(function () {
                return Msg.sync()
            })
            .then(function (res) {
                gutil.log('创建Msg成功', res);
            });
    }
};