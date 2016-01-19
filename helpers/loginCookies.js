/**
 * Created by liangkuaisheng on 16/1/18.
 */
"use strict";

var EnDeCode = require('./EnDeCode');
var utils = require('utility');

var SecretType = 'sha256',
    key = 'lks_secret',
    encodeType = 'hex',
    charset = 'utf8';

function encodePass(pass) {
    return utils.hmac(SecretType, key, EnDeCode.md5(pass));
}

var timeLong = 30 * 24 * 60 * 60 * 1000;

module.exports = {
    encodePass: encodePass,
    encodeCookie: function (res, name, pass) {
        var str = JSON.stringify({
            name: name,
            pass: encodePass(pass)
        });
        var cookieStr = EnDeCode.encrypt(str);
        res.cookie('uid', cookieStr, { maxAge: timeLong, httpOnly: true });
    },
    decodeCookie: function (cookieStr) {
        return JSON.parse(EnDeCode.decrypt(cookieStr));
    }
};