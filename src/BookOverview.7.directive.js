// BookOverview.7.directive.js
/*
	BookOverview7
*/
'use strict';

module.exports = BookOverview7Directive;

/* @ngInject */
function BookOverview7Directive() {
	var directive = {
		restrict: 'E',
		template: require('./BookOverview.tpl.html'),
		scope: {},
		controller: BookOverview7Controller,
		controllerAs: 'vm',
		bindToController: {},
	};
	return directive;
}

/* @ngInject */
function BookOverview7Controller(httpBook) {
	var vm = this;

	httpBook.get().then(function(newBook) { vm.book = newBook; });
}

