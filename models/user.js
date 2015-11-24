/**
 * Created by liangkuaisheng on 15/11/23.
 */
var Sequelize = require('sequelize');
var connectDB = require('main-dir/helpers/connectDB');

var User = connectDB.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.TEXT
});

module.exports = User;