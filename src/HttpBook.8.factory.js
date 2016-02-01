'use strict';

var bookMock = require('./BookMock.json');
module.exports = HttpBook8Factory;

/* @ngInject */
function HttpBook8Factory($timeout) {
	var service = {
		get: get,//(): Promise<book>
	};
	var savedBook;
	return service;

	function get() {
		if (!savedBook) {
			console.debug('[http-book8] remote get simulating...');
			savedBook = $timeout(function() {
				console.debug('[http-book8] remote get simulated.');
				return bookMock;
			}, 3000);
		}
		return savedBook;
	}
}