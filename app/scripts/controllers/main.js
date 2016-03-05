'use strict';

/**
 * @ngdoc function
 * @name localclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the localclientApp
 */
angular.module('localclientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
