'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBook4Factory;

/* @ngInject */
function HttpBook4Factory($timeout) {
	var service = {
		get: get,//(cb)
	};
	var savedBook;
	var cbQueue = [];
	return service;

	function get(cb) {
		if (savedBook) {
			$timeout(function() {
				cb(savedBook);
			});
		} else {
			cbQueue.push(cb);
			if (cbQueue.length === 1) {
				console.debug('[http-book4] remote get simulating...');
				$timeout(function() {
					savedBook = bookMock;
					$timeout(function() {
						cbQueue.forEach(function(cb) {
							cb(bookMock);
						});
					});
					console.debug('[http-book4] remote get simulated.');
				}, 3000);
			}
		}
	}
}