// BookDetails.directive.js
/*
	BookDetails
*/
'use strict';

module.exports = BookDetailsDirective;

/* @ngInject */
function BookDetailsDirective() {
	var directive = {
		restrict: 'E',
		template: require('./BookDetails.tpl.html'),
		scope: {},
		controller: BookDetailsController,
		controllerAs: 'vm',
		bindToController: {},
	};
	return directive;
}

/* @ngInject */
function BookDetailsController(httpBook) {
	var vm = this;

	httpBook.get(function(book) { vm.book = book; });
}

