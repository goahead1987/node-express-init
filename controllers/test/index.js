'use strict';

var querystring = require('querystring');
var config = require('config');


var env = config.ver;
var reee = config.get('name');
module.exports = function (router) {
    router.get('/', function (req, res) {
        var qs = querystring.stringify(req.query);
        var data = {
            list: [
                {name:env, show: true},
                {name:reee, show: false},
                {name:config.get('name'), show: true}
            ],
            blah: [
                {num: 1},
                {num: 2},
                {num: 3, inner:[
                    {'time': '15ee:00'},
                    {'time': '16:00'},
                    {'time': '17:00'},
                    {'time': '18:00'}
                ]},
                {num: 4}
            ]
        };

        res.render('test/index', data);
    });
};