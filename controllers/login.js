'use strict';

var Users = require('main-dir/services/Users');
var querystring = require('querystring');

module.exports = function (router) {
    router.get('/', function (req, res) {
        var qs = querystring.stringify(req.query);
        res.render('login', {
            user: {}
        });
        //Users.getById(1)
        //.then(function (user) {
        //        res.render('index', {
        //            user: user
        //        });
        //    });
    });

    router.post('/in', function (req, res) {
        var data = req.body;
        var code = req.session.imgcode;
        console.log(code);
        if (code.toLocaleLowerCase() === data.imgcode.toLocaleLowerCase()) {
            res.send({
                a:code
            });
        }else{
            res.send({
                a:code
            });
        }
    });
};