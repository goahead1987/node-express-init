'use strict';

var querystring = require('querystring');

module.exports = function (router) {
	router.get('/', function (req, res) {
		var qs = querystring.stringify(req.query);
		res.render('index', {});
	});
};