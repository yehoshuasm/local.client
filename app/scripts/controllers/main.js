'use strict';

/**
 * @ngdoc function
 * @name localclientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the localclientApp
 */
angular.module('localclientApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.gameBoards = [];

    $http.get('http://localhost:49738/api/GameBoard').
		success(function(data) {
			console.log(data);
		})
		.error(function(){
			console.log("Error");
		});

    $scope.addGameBoard = function () {
    	$scope.gameBoards.push($scope.gameBoard);
  		$scope.gameBoard = '';
	};
	$scope.removeGameBoard = function (index) {
  		$scope.gameBoards.splice(index, 1);
	};
  });
