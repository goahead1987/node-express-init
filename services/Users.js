/**
 * Created by liangkuaisheng on 15/11/23.
 */


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
    }
};
module.exports = new Users();