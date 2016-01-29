'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBook5Factory;

var noop = require('angular').noop;

/* @ngInject */
function HttpBook5Factory($timeout) {
	var service = {
		get: get,//(cb)
	};
	var savedBook;
	var cbQueue = [];
	return service;

	function get(cb) {
		if (!cb) {
			cb = noop;
		}
		if (savedBook) {
			$timeout(function() {
				cb(savedBook);
			});
		} else {
			cbQueue.push(cb);
			if (cbQueue.length === 1) {
				console.debug('[http-book5] remote get simulating...');
				$timeout(function() {
					savedBook = bookMock;
					$timeout(function() {
						cbQueue.forEach(function(cb) {
							cb(bookMock);
						});
					});
					console.debug('[http-book5] remote get simulated.');
				}, 3000);
			}
		}
	}
}