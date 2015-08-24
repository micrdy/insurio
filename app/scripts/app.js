'use strict';

/**
 * @ngdoc overview
 * @name insurioApp
 * @description
 * # insurioApp
 *
 * Main module of the application.
 */
angular
  .module('insurioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/ergebnis', {
        templateUrl: 'views/ergebnis.html',
        controller: 'ErgebnisCtrl',
        controllerAs: 'ergebnis'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
