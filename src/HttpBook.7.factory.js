'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBook7Factory;

/* @ngInject */
function HttpBook7Factory($timeout) {
	var service = {
		get: get,//(): Promise<book>
	};
	var savedBook;
	return service;

	function get() {
		if (!savedBook) {
			console.debug('[http-book7] remote get simulating...');
			savedBook = $timeout(function() {
				console.debug('[http-book7] remote get simulated.');
				return bookMock;
			}, 3000);
		}
		return savedBook;
	}
}