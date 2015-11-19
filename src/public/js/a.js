/**
 * Created by liangkuaisheng on 15/11/18.
 */
var b = require('./b');
var a = function () {

};
a.xx = b.xxxxx;
alert(a.xx);
//exports.a = a;
module.exports = a;