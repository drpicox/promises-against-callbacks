'use strict';

var angular = require('angular');

module.exports = angular.module('pacApp', [])

.directive('pacBookDetails', require('./BookDetails.8.directive'))
.directive('pacBookOverview', require('./BookOverview.8.directive'))

.factory('httpBook', require('./HttpBook.8.factory'))

// warmup
.run(function(httpBook) { httpBook.get(); })

// simulate illegal op
//.run(function(httpBook) { httpBook.get(function(book) {book.countPages();}); })
.run(function(httpBook) { httpBook.get().then(function(book) { book.countPages(); }); })

.name;
