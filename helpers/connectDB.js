/**
 * Created by liangkuaisheng on 15/11/23.
 */

//根据系统环境载入我们的配置
var node_env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev';
var configRuntime = require('config-realtime');
var config = configRuntime.get('', 'config/dbconfig/mysqlconfig-' + node_env + '.json', false);
var Sequelize = require('sequelize');
var connectDB = new Sequelize(config.dbname, config.uname, config.upass, config.option);

module.exports = connectDB;