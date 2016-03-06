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
    $scope.gameBoards = [];
    $scope.addGameBoard = function () {
    	$scope.gameBoards.push($scope.gameBoard);
  		$scope.gameBoard = '';
	};
	$scope.removeGameBoard = function (index) {
  		$scope.gameBoards.splice(index, 1);
	};
  });
