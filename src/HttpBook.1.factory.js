'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBookFactory;

/* @ngInject */
function HttpBookFactory($timeout) {
	var service = {
		get: get,//(cb)
	};
	return service;

	function get(cb) {
		console.debug('[http-book] remote get simulating...');
		$timeout(function() { 
			cb(bookMock);
			console.debug('[http-book] remote get simulated.');
		}, 3000);
	}
}