'use strict';

/**
 * @ngdoc function
 * @name insurioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the insurioApp
 */
angular.module('insurioApp')
  .controller('MainCtrl', function ($scope, $location) {
  	 // initiate scope user
     $scope.user = { age: null, work: null, life: null, risk: null, vehicle: null};

     // on form submit
     $scope.submitTesting = function(){
     	$location.path("ergebnis");
     }
  });
