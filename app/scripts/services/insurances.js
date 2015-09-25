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
  		getIcon: function(val){
        console.log(val);
        switch(val){
          case "Privathaftpflichtversicherung": return "fa-shield";
          break;
          case "Rechtschutzversicherung": return "fa-university";
          break;
          case "Risikolebensversicherung": return "fa-bolt";
          break;
          case "Erwerbsunfähigkeitsversicherung": return "fa-wheelchair";
          break;
          case "Nichtberufsunfallversicherung": return "fa-ambulance";
          break;
          case "Sparzielversicherung": return "fa-money";
          break;
          case "Vorsorgesparen": return "Vorsorgesparen Text";
          break;
          case "Vermögensversicherung": return "fa-money";
          break;
          case "Berufliche Vorsorge": return "Berufliche VorsorgeText";
          break;
          case "Unfallversicherung": return "fa-ambulance";
          break;
          case "Kollektiv-Krankenversicherung": return "fa-plus";
          break;
          case "Geschäftsversicherung": return "Geschäftsversicherung";
          break;
          case "Betriebshaftpflicht": return "Betriebshaftpflicht";
          break;
          case "Vorsorgesparen": return "Vorsorgesparen";
          break;
        }
  		},
  		getText: function(val){
        return "Text der Versicherung";
  		},
  		getTextMore: function(val){
        return "Mehr Text der Versicherung";
  		}
  	}
  });
