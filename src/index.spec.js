// See: http://jasmine.github.io/2.4/introduction.html
describe('pacApp', function() {

	it('should exists', function() {

		var pacApp = angular.module('pacApp');
		expect(pacApp).toBeDefined();
	});

});