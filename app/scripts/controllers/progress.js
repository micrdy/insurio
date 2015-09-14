'use strict';

/**
 * @ngdoc function
 * @name insurioApp.controller:ProgressCtrl
 * @description
 * # ProgressCtrl
 * Controller of the insurioApp
 */
 angular.module('insurioApp')
 .controller('ProgressCtrl', function ($location, $scope) {
 	$scope.$on('$locationChangeStart', function(event) {
 		$scope.active1 = 0; 
 		$scope.active2 = 0; 
 		$scope.active3 = 0; 

 		var currentPath = $location.path();
 		if(currentPath == "/"){
 			$scope.active1 = 1; 
 		}else if(currentPath == "/ergebnis"){
 			$scope.active2 = 1;
 		}else if(currentPath == "/anfrage"){
 			$scope.active3 = 1; 
 		}
 	});

 });
