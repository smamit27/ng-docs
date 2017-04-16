'use strict';

/**
 * @ngdoc function
 * @name app.controller:RestController
 * @description
 * This is main controller .It creates a variable.
 * "hello" on the scope and defines it within the string
 **/
angular.module('app')
  .controller('RestController', ['$scope', function (sc) {
    sc.hello = "Zensar";
  }]);