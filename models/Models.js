/**
 * Created by liangkuaisheng on 15/11/23.
 */
var Seq = require('sequelize');
var connectDB = require('main-dir/helpers/connectDB');
var Models = {};

/**用户信息***/
Models.User = connectDB.define('user', {
    id: {
        type: Seq.INTEGER,
        primaryKey: true, // 定义主键
        autoIncrement: true //自动递增
    },
    account: {
        type: Seq.STRING(64),
        allowNull: false,
        unique: true,
        comment: "账号名称"
    },
    pass: {
        type: Seq.STRING(32),
        allowNull: false,
        defaultValue: 'e10adc3949ba59abbe56e057f20f883e',
        comment: "密码123456"
    },
    name: {
        type: Seq.STRING(64),
        comment: "姓名"
    },
    nick: {
        type: Seq.STRING(64),
        allowNull: false,
        comment: "昵称"
    },
    tel: {
        type: Seq.STRING(16),
        //allowNull: false,
        //unique: true,
        comment: "手机号"
    },
    email: {
        type: Seq.STRING(64),
        comment: "邮箱"
    }
}, {
    underscored: true
});

module.exports = Models;