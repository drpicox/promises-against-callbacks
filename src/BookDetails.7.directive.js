// BookDetails.7.directive.js
/*
	BookDetails7
*/
'use strict';

module.exports = BookDetails7Directive;

/* @ngInject */
function BookDetails7Directive() {
	var directive = {
		restrict: 'E',
		template: require('./BookDetails.tpl.html'),
		scope: {},
		controller: BookDetails7Controller,
		controllerAs: 'vm',
		bindToController: {},
	};
	return directive;
}

/* @ngInject */
function BookDetails7Controller(httpBook) {
	var vm = this;

	httpBook.get().then(function(newBook) { vm.book = newBook; });
}

