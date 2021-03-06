'use strict';

var angular = require('angular');

module.exports = angular.module('pacApp', [])

.directive('pacBookDetails', require('./BookDetails.directive'))
.directive('pacBookOverview', require('./BookOverview.directive'))

.factory('httpBook', require('./HttpBook.factory'))

// warmup
//.run(function(httpBook) { httpBook.get(); })

// simulate illegal op
//.run(function(httpBook) { httpBook.get(function(book) {book.countPages();}); })
//.run(function(httpBook) { httpBook.get().then(function(book) { book.countPages(); }); })

.name;
