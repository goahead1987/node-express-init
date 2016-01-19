'use strict';

var Users = require('main-dir/services/Users');
var ResObj = require('main-dir/helpers/ResObj');
var LoginCookies = require('main-dir/helpers/LoginCookies');


module.exports = function (router) {
    router.get('/', function (req, res) {
        //var uidStr = req.cookies.uid;
        //var uidObj = LoginCookies.decodeCookie(uidStr);
        //Users.getByName(uidObj.name)
        //    .then(function (user) {
        //        var data = user;
        //        if (data !== null) {
        //            if (uidObj.pass === LoginCookies.encodePass(data.pass)) {
        //                data.pass = '';
        //                res.send(ResObj.Success(data));
        //            }else{
        //                res.redirect('/login');
        //            }
        //        } else {
        //            res.redirect('/login');
        //        }
        //    })
        //    .catch(function () {
        //        res.redirect('/login');
        //    });
        res.render('user', {
            user: {}
        });
    });

};