/**
 * Created by liangkuaisheng on 15/11/23.
 */
var Seq = require('sequelize');
var connectDB = require('main-dir/helpers/connectDB');
var Models = {};

/***用户信息***/
var User = Models.User = connectDB.define('user', {
    id: {
        type: Seq.INTEGER,
        primaryKey: true, // 定义主键
        unique: true,
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
        unique: true,
        comment: "手机号"
    },
    email: {
        type: Seq.STRING(64),
        unique: true,
        comment: "邮箱"
    }
});

/***用户和朋友关联关系***/
var UserMid = Models.UserMid  = connectDB.define('user_mid', {
    id: {
        type: Seq.INTEGER,
        primaryKey: true, // 定义主键
        unique: true,
        autoIncrement: true //自动递增
    },
    relate: {
        type: Seq.INTEGER(2),
        defaultValue: 0,
        comment: "熟识程度"
    },
    relateType: {
        type: Seq.INTEGER(2),
        field: 'relate_type',
        defaultValue: 0,
        comment: "关系类型，不认识0，直接认识1，间接认识2，"
    },
    contactWay: {
        type: Seq.INTEGER(2),
        allowNull: false,
        field: 'contact_way',
        comment: "相识途径，账号查找0，朋友帮助1"
    },
    midUserId: {
        type: Seq.INTEGER,
        field: 'mid_user_id',
        comment: "相识中间人id"
    },
    name: {
        type: Seq.STRING(64),
        comment: "朋友的备注姓名"
    }
});
User.belongsToMany(User, {as: 'Root', through: UserMid});

/***消息***/
var Msg = Models.Msg  = connectDB.define('msg', {
    id: {
        type: Seq.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    content: {
        type: Seq.STRING,
        comment: "文字内容"
    },
    imgUrls: {
        type: Seq.STRING,
        field: 'img_urls',
        comment: "图片地址串，“:”号分割"
    }
});
User.hasMany(Msg);

/***评论***/
var Comment = Models.Comment  = connectDB.define('comment', {
    id: {
        type: Seq.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    },
    content: {
        type: Seq.STRING,
        comment: "文字内容"
    },
    fromUser: {
        type: Seq.INTEGER,
        allowNull: false,
        field: 'from_user'
    },
    toUser: {
        type: Seq.INTEGER,
        allowNull: false,
        field: 'to_user'
    }
});

module.exports = Models;