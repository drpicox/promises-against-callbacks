'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBook3Factory;

/* @ngInject */
function HttpBook3Factory($timeout) {
	var service = {
		get: get,//(cb)
	};
	var savedBook;
	var cbQueue = [];
	return service;

	function get(cb) {
		if (savedBook) {
			cb(savedBook);
		} else {
			cbQueue.push(cb);
			if (cbQueue.length === 1) {
				console.debug('[http-book3] remote get simulating...');
				$timeout(function() {
					savedBook = bookMock;
					cbQueue.forEach(function(cb) {
						cb(bookMock);
					});
					console.debug('[http-book3] remote get simulated.');
				}, 3000);
			}
		}
	}
}