// BookOverview.directive.js
/*
	BookOverview
*/
'use strict';

module.exports = BookOverviewDirective;

/* @ngInject */
function BookOverviewDirective() {
	var directive = {
		restrict: 'E',
		template: require('./BookOverview.tpl.html'),
		scope: {},
		controller: BookOverviewController,
		controllerAs: 'vm',
		bindToController: {},
	};
	return directive;
}

/* @ngInject */
function BookOverviewController(httpBook) {
	var vm = this;

	httpBook.get(function(book) { vm.book = book; });
}

