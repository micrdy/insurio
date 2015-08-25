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
  	 $scope.active1 = 1; 
  	 $scope.active2 = 0;
  	 $scope.active3 = 0; 
     $scope.user = { age: null, work: null, life: null, risk: null, vehicle: null};


     // on form submit
     $scope.submitTesting = function(){

     	// save to localStorage
     	var values = {alter: $scope.age, work: $scope.work, life: $scope.life, risk: $scope.risk, vehicle: $scope.vehicle};
   		var insurances = {haftpflicht: null, kranken: null, kfz: null};

     	localStorage.setItem("values", JSON.stringify(values));

     	// check if user needs vehicle insurance
     	if($scope.user.vehicle == 1){
     		insurances.kfz = 1; 
     		localStorage.setItem("insurances", JSON.stringify(insurances));
     	}



     	// calculate
     	$location.path("ergebnis");
     }
  });
