'use strict';

var Users = require('main-dir/services/Users');
var ResObj = require('main-dir/helpers/ResObj.js');

module.exports = function (router) {
    /*
    * 返回页面
    * */
    router.get('/', function (req, res) {
        res.render('register', {});
    });

    /*
    * 检测用户名是否可用
    * */
    router.get('/hasName', function (req, res) {
        var reqObj = req.query;
        if (reqObj.name) {
            Users.hasName(reqObj.name)
                .then(function (num) {
                    res.send(ResObj.Success(num));
                }, function () {
                    res.send(ResObj.Unkown);
                });
        }else{
            res.send(ResObj.ParamsErr);
        }
    });

    /*
     * 检测验证码是否正确
     * */
    router.get('/imgcode', function (req, res) {
        res.send({

        });
    });

    /*
    * 注册用户
    * */
    router.post('/in', function (req, res) {
        var data = req.body;
        var code = req.session.imgcode;
        if (data.name && data.pass && data.imgcode) {
            if (code.toLocaleLowerCase() === data.imgcode.toLocaleLowerCase()) {
                Users.insert(data)
                .then(function (user) {
                        if (user !== null) {
                            res.send(ResObj.Success());
                        }else{
                            res.send(ResObj.DbCreateErr);
                        }
                    });
            }else{
                res.send(ResObj.ImgCodeErr);
            }
        }else{
            res.send(ResObj.ParamsErr);
        }
    });
};