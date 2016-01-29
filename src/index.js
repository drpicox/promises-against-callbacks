'use strict';

var angular = require('angular');

module.exports = angular.module('pacApp', [])

.directive('pacBookDetails', require('./BookDetails.3.directive'))
.directive('pacBookOverview', require('./BookOverview.directive'))

.factory('httpBook', require('./HttpBook.3.factory'))

// warmup
//.run(function(httpBook) { httpBook.get(); })

// simulate illegal op
//.run(function(httpBook) { httpBook.get(function(book) { book.countPages(); }); })

.name;
