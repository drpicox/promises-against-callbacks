'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBook2Factory;

/* @ngInject */
function HttpBook2Factory($timeout) {
	var service = {
		get: get,//(cb)
	};
	var savedBook;
	return service;

	function get(cb) {
		if (savedBook) {
			cb(savedBook);
		} else {
			console.debug('[http-book2] remote get simulating...');
			$timeout(function() {
				savedBook = bookMock;
				cb(bookMock);
				console.debug('[http-book2] remote get simulated.');
			}, 3000);
		}
	}
}