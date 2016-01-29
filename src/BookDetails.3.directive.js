// BookDetails.3.directive.js
/*
	BookDetails3
*/
'use strict';

module.exports = BookDetails3Directive;

/* @ngInject */
function BookDetails3Directive() {
	var directive = {
		restrict: 'E',
		template: require('./BookDetails.tpl.html'),
		scope: {},
		controller: BookDetails3Controller,
		controllerAs: 'vm',
		bindToController: {},
	};
	return directive;
}

/* @ngInject */
function BookDetails3Controller(httpBook) {
	var book;

	httpBook.get(function(newBook) { book = newBook; });
	this.book = book;
}

