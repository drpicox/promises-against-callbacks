'use strict';

var angular = require('angular');

module.exports = angular.module('pacApp', [])

.directive('pacBookDetails', require('./BookDetails.7.directive'))
.directive('pacBookOverview', require('./BookOverview.7.directive'))

.factory('httpBook', require('./HttpBook.7.factory'))

// warmup
.run(function(httpBook) { httpBook.get(); })

// simulate illegal op
.run(function(httpBook) { httpBook.get().then(function(book) { book.countPages(); }); })

.name;
