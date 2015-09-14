'use strict';

/**
 * @ngdoc function
 * @name insurioApp.controller:ErgebnisCtrl
 * @description
 * # ErgebnisCtrl
 * Controller of the insurioApp
 */
angular.module('insurioApp')
  .controller('ErgebnisCtrl', function ($scope, $rootScope, Insurances, $timeout, $location) {

  	$scope.hideLoading = true;
  	// get insurances

  	$scope.goBack = function(){
  		$location.path("main");;
  	}

  	$scope.anfrage = function(){
  		$location.path("anfrage");
  	}
  	
    var values = JSON.parse(localStorage.getItem("values"));
    console.log(values);

    $timeout(function(){
    	$scope.hideLoading = false;
    }, 1000); 
  });	
