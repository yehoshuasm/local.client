'use strict';

/**
 * @ngdoc function
 * @name localclientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the localclientApp
 */
angular.module('localclientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
