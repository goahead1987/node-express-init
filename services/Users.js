/**
 * Created by liangkuaisheng on 15/11/23.
 */

"use strict";
var Models = require('main-dir/models/Models');
var User = Models.User;

var Users = function () {
};
Users.prototype = {
    getById: function (id) {
        return User.findById(id)
            .then(function (user) {
                if (user) {
                    return user.dataValues;
                }
                return null;
            });
    },
    getByName: function (name) {
        return User.findOne({
            where: {
                account: name
            }
        })
            .then(function (user) {
                if (user) {
                    return user.dataValues;
                }
                return null;
            })
            .catch(function () {
                return null;
            })
    },
    getByNamePass: function (name, pass) {
        return User.findOne({
            where: {
                account: name,
                pass: pass
            }
        })
            .then(function (user) {
                if (user) {
                    return user.dataValues;
                }
                return null;
            })
            .catch(function () {
                return null;
            })
    },
    hasName: function (name) {
        return User.findOne({
            attributes: ['id'],
            where: {
                account: name
            }
        }).then(function (user) {
            if (user) {
                return 1;
            }
            return 0;
        })
    },
    insert: function (user) {
        return this.hasName(user.name)
        .then(function (num) {
                return num;
            })
        .then(function (num) {
            if (num === 0) {
                return User.create({
                    account: user.name,
                    pass: user.pass,
                    nick: user.name
                })
                    .then(function (res) {
                        return res.dataValues;
                    }, function (err) {
                        return null;
                    })
            }else{
                return null;
            }
        })
        .catch(function (err) {
            return null;
        })
    }
};
module.exports = new Users();