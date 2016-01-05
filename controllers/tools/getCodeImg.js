/**
 * Created by liangkuaisheng on 16/1/4.
 */
'use strict';
var str_ary = ['2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H',
    'J','K','L','M','N','P','R','S','T','U','V','W','X','Y','Z'];
var ccap = require('ccap')({
    width:100,//set width,default is 256

    height:30,//set height,default is 60

    offset:20,//set text spacing,default is 40

    quality:50,//set pic quality,default is 50

    fontsize:24,//set font size,default is 57

    generate:function(){//Custom the function to generate captcha text
        var str_num = 4,
            r_num = str_ary.length,
            text = '';
        for(var i=0;i<str_num;i++){
            var pos = Math.floor(Math.random()*r_num)
            text += str_ary[pos];//生成随机数
        }
        return text;
    }
});

module.exports = function (router) {

    router.get('/*.jpg', function (req, res) {
        var captcha = ccap.get();
        req.session.imgcode = captcha[0];
        res.end(captcha[1]);
    });
};