'use strict';

var querystring = require('querystring');
var config = require('config');


var env = config.ver;
var reee = config.get('name');
module.exports = function (router) {
    router.get('/', function (req, res) {
        var qs = querystring.stringify(req.query);
        var fff = 11;
        var configRuntime = require('main-dir/helpers/config-realtime');
        var obj = configRuntime.get();
        var name = configRuntime.get('name');
        var vvv = configRuntime.get('sss.vvv');
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
                    {'time': obj},
                    {'time': name},
                    {'time': vvv},
                    {'time': '18:00'}
                ]},
                {num: 4}
            ],
            fff: fff
        };

        res.render('test/index', data);
    });
};