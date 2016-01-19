'use strict';

var Users = require('main-dir/services/Users');
var ResObj = require('main-dir/helpers/ResObj');
var LoginCookies = require('main-dir/helpers/LoginCookies');
var querystring = require('querystring');

module.exports = function (router) {
    router.get('/', function (req, res) {
        var qs = querystring.stringify(req.query);
        res.render('login', {
            user: {}
        });
    });

    router.post('/in', function (req, res) {
        var data = req.body;
        var code = req.session.imgcode;
        console.log(code);
        //res.redirect('/register');
        if (code.toLocaleLowerCase() === data.imgcode.toLocaleLowerCase()) {
            Users.getByNamePass(data.name, data.pass)
                .then(function (user) {
                    var data = user;
                    if (data !== null) {
                        LoginCookies.encodeCookie(res, data.account, data.pass);
                        res.send(ResObj.Success(null));
                    }else{
                        res.send(ResObj.NamePassErr);
                    }
                })
                .catch(function () {
                    res.send(ResObj.DbSelectErr);
                })
        }else{
            res.send(ResObj.ImgCodeErr);
        }
    });
};