'use strict';

/**
 * @ngdoc function
 * @name insurioApp.controller:ErgebnisCtrl
 * @description
 * # ErgebnisCtrl
 * Controller of the insurioApp
 */
angular.module('insurioApp')
  .controller('ErgebnisCtrl', function ($scope, $rootScope, Insurances) {

  	// get insurances
    var insurances = JSON.parse(localStorage.getItem("insurances"));
    console.log(insurances);
  });	
