'use strict';

/**
 * @ngdoc service
 * @name insurioApp.Insurances
 * @description
 * # Insurances
 * Service in the insurioApp.
 */
angular.module('insurioApp')
  .service('Insurances', function () {

  	var insurances = [
  		{"id":1, "name":"Haftpflicht", "text":"Kurzer Text", "moreText":"Langer Text"}

  	];
    
  	return {
  		getName: function(){

  		},
  		getText: function(){

  		},
  		getTextMore: function(){

  		}
  	}
  });
