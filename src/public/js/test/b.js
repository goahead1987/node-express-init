/**
 * Created by liangkuaisheng on 15/12/8.
 */

var c = require('./c.js');
var b = {};
b.xxx = '在b中：' + c.xxx;
module.exports = b;