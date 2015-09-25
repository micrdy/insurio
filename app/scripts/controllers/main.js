'use strict';

/**
* @ngdoc function
* @name insurioApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the insurioApp
*/
angular.module('insurioApp')
.controller('MainCtrl', function ($scope, $location, $localStorage) {

  // populate age select
  $scope.years = [];
  var currentYear = new Date().getFullYear();
  for (var i = currentYear; i > currentYear - 100; i--) {
    $scope.years.push(i - 1);
  }
  // initiate scope user
  $scope.user = { age: null, life: null, work: null, goal: null, vehicle: null};

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
    $localStorage.user = $scope.user;

    // redirect
    $location.path("ergebnis");
  }
});
