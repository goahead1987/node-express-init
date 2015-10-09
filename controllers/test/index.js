'use strict';

var querystring = require('querystring');

module.exports = function (router) {
    router.get('/', function (req, res) {
        var qs = querystring.stringify(req.query);
        var data = {
            list: [
                {name:' guokai', show: true},
                {name:' benben', show: false},
                {name:' dierbaby', show: true}
            ],
            blah: [
                {num: 1},
                {num: 2},
                {num: 3, inner:[
                    {'time': '15:00'},
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