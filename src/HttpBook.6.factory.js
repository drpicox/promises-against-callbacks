'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBook6Factory;

var noop = require('angular').noop;

/* @ngInject */
function HttpBook6Factory($timeout, $exceptionHandler) {
	var service = {
		get: get,//(cb)
	};
	var savedBook;
	var cbQueue = [];
	return service;

	function get(aCb) {
		if (!aCb) {
			aCb = noop;
		}
		var cb = function(newBook) {
			try {
				aCb(newBook);
			} catch (e) {
				$exceptionHandler(e);
			}
		};
		if (savedBook) {
			$timeout(function() {
				cb(savedBook);
			});
		} else {
			cbQueue.push(cb);
			if (cbQueue.length === 1) {
				console.debug('[http-book6] remote get simulating...');
				$timeout(function() {
					savedBook = bookMock;
					$timeout(function() {
						cbQueue.forEach(function(cb) {
							cb(bookMock);
						});
					});
					console.debug('[http-book6] remote get simulated.');
				}, 3000);
			}
		}
	}
}