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

    $scope.showPopover = function() {
      if(!$scope.userForm.$valid){
        $scope.formIsOk = true;
      }
    };

    $scope.hidePopover = function () {
      if(!$scope.userForm.$valid){
        $scope.formIsOk = false;
      }
    }; 
     // on form submit
     $scope.submitTesting = function(){

     	// save input data to localStorage
       var values = {alter: $scope.user.age, work: $scope.user.work, life: $scope.user.life, risk: $scope.user.risk, vehicle: $scope.user.vehicle};
       localStorage.setItem("values", JSON.stringify(values));

     	// redirect
     	$location.path("ergebnis");
     }
   });
