/**
 * Created by liangkuaisheng on 16/1/18.
 */

var crypto = require('crypto');

var SecretType = 'aes-256-cbc',
    key = 'lks_secret',
    encodeType = 'hex',
    charset = 'utf8';


var encrypt = function (str) {
    var cipher = crypto.createCipher(SecretType, key);
    var enc = cipher.update(str, charset, encodeType);
    enc += cipher.final(encodeType);
    return enc;
};

var decrypt = function (str) {
    var decipher = crypto.createDecipher(SecretType, key);
    var dec = decipher.update(str, encodeType, charset);
    dec += decipher.final(charset);
    return dec;
};

var md5 = function (str) {
    var md5sum = crypto.createHash('md5');
    md5sum.update(str);
    str = md5sum.digest(encodeType);
    return str;
};


module.exports = {
    encrypt: encrypt,
    decrypt: decrypt,
    md5: md5
};