/**
 * Created by liangkuaisheng on 15/11/23.
 */


var requireDir = require('require-dir');
var Models = requireDir('../models');
var User = Models.User;
//var User = require('main-dir/models/User');
var Users = function () {
};
Users.prototype = {
    getById: function (id) {
        return User.findById(id)
            .then(function (user) {
                return user.dataValues;
            });
    }
};
module.exports = new Users();