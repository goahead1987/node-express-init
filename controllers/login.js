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
};