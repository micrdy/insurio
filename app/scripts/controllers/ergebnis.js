'use strict';

/**
 * @ngdoc function
 * @name insurioApp.controller:ErgebnisCtrl
 * @description
 * # ErgebnisCtrl
 * Controller of the insurioApp
 */
angular.module('insurioApp')
  .controller('ErgebnisCtrl', function ($scope, Insurances, $timeout, $location, $localStorage) {

  	$scope.hideLoading = true;
  	// get insurances

  	$scope.goBack = function(){
  		$location.path("main");;
  	}

  	$scope.anfrage = function(){
  		$location.path("anfrage");
  	}

    // get user data
    $scope.user = $localStorage.user;
    console.log($scope.user);

    $scope.must = [];
    $scope.nice = [];

    // must haves
    $scope.must.push("Privathaftpflichtversicherung");
    $scope.nice.push("Rechtschutzversicherung");

    // Life situation
    switch($scope.user.life){
      case "5": $scope.nice.push("Risikolebensversicherung");
      break;
      case "6": $scope.nice.push("Risikolebensversicherung");
    }

    // Work
    switch($scope.user.work){
      case "2": $scope.must.push("Erwerbsunfähigkeitsversicherung");
      break;
      case "3": $scope.must.push("Erwerbsunfähigkeitsversicherung");
      break;
      case "4": $scope.must.push("Nichtberufsunfallversicherung");
      break;
    }

    // goal
    if($scope.user.goal){
    if($scope.user.goal.familie){
      $scope.must.push("Risikolebensversicherung");
    }
    if($scope.user.goal.wohneigentum){
      $scope.must.push("Sparzielversicherung");
    }
    if($scope.user.goal.steuer || $scope.user.goal.vermoegen){
      $scope.must.push("Vorsorgesparen");
    }
    if($scope.user.goal.eigentum){
      $scope.must.push("Vermögensversicherung");
    }
    if($scope.user.goal.selbststaendig){
      $scope.must.push("Berufliche Vorsorge");
      $scope.must.push("Unfallversicherung");
      $scope.nice.push("Kollektiv-Krankenversicherung");
      $scope.nice.push("Geschäftsversicherung");
      $scope.nice.push("Betriebshaftpflicht");
    }
    if($scope.user.goal.pension){
      $scope.must.push("Vorsorgesparen");
    }
  }

    // vehicle
    if($scope.user.vehicle){
    if($scope.user.vehicle.velo){
      $scope.must.push("Bessere Privathaftpflichtversicherung");
      $scope.nice.push("Verkehrsschutzversicherung");
    }
    if($scope.user.vehicle.roller){
      $scope.must.push("Motorfahrzeugversicherung");
      $scope.nice.push("Verkehrsschutzversicherung");
    }
    if($scope.user.vehicle.motorrad){
      $scope.must.push("Motorfahrzeugversicherung");
      $scope.nice.push("Verkehrsschutzversicherung");
    }
    if($scope.user.vehicle.auto){
      $scope.must.push("Motorfahrzeugversicherung");
      $scope.nice.push("Verkehrsschutzversicherung");
    }
    if($scope.user.vehicle.boot){
      $scope.must.push("Bootsversicherung");
      $scope.nice.push("Verkehrsschutzversicherung");
    }
  }

    console.log($scope.must);
    console.log($scope.nice);

    $scope.mustPrint = [];
    $scope.nicePrint = [];
    // walk through array
    for(var i = 0; i < $scope.must.length; i++){
      $scope.mustPrint.push({icon: Insurances.getIcon($scope.must[i]), name: $scope.must[i], text: Insurances.getText($scope.must[i])});
    }
    for(var i = 0; i < $scope.nice.length; i++){
      $scope.nicePrint.push({icon: Insurances.getIcon($scope.nice[i]), name: $scope.nice[i], text: Insurances.getText($scope.nice[i])});
    }
    // hide loading screen
    $timeout(function(){
    	$scope.hideLoading = false;
    }, 1000);
  });
