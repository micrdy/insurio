"use strict";angular.module("insurioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/ergebnis",{templateUrl:"views/ergebnis.html",controller:"ErgebnisCtrl",controllerAs:"ergebnis"}).when("/anfrage",{templateUrl:"views/anfrage.html",controller:"AnfrageCtrl",controllerAs:"anfrage"}).otherwise({redirectTo:"/"})}]),angular.module("insurioApp").controller("MainCtrl",["$scope","$location",function(a,b){a.user={age:null,work:null,life:null,risk:null,vehicle:null},a.showPopover=function(){a.userForm.$valid||(a.formIsOk=!0)},a.hidePopover=function(){a.userForm.$valid||(a.formIsOk=!1)},a.submitTesting=function(){var c={alter:a.user.age,work:a.user.work,life:a.user.life,risk:a.user.risk,vehicle:a.user.vehicle};localStorage.setItem("values",JSON.stringify(c)),b.path("ergebnis")}}]),angular.module("insurioApp").controller("ErgebnisCtrl",["$scope","$rootScope","Insurances","$timeout","$location",function(a,b,c,d,e){a.hideLoading=!0,a.goBack=function(){e.path("main")},a.anfrage=function(){e.path("anfrage")};var f=JSON.parse(localStorage.getItem("values"));console.log(f),d(function(){a.hideLoading=!1},1e3)}]),angular.module("insurioApp").service("Insurances",function(){return{getName:function(){},getText:function(){},getTextMore:function(){}}}),angular.module("insurioApp").controller("ProgressCtrl",["$location","$scope",function(a,b){b.$on("$locationChangeStart",function(c){b.active1=0,b.active2=0,b.active3=0;var d=a.path();"/"==d?b.active1=1:"/ergebnis"==d?b.active2=1:"/anfrage"==d&&(b.active3=1)})}]),angular.module("insurioApp").controller("AnfrageCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("insurioApp").run(["$templateCache",function(a){a.put("views/anfrage.html",'<div> <img id="dennis" src="../images/dennis.6a1b581d.jpg" alt="Dennis Rölleke"> </div> <p class="anfrageText"> Hi! Ich bin Dennis, dein persönlicher insurio Versicherungs-Berater. Darf ich dir per Mail oder Telefon weitere Informationen oder sogar eine individuelle Offerte zukommen lassen? </p> <hr> <h4>Ja, bitte nehmt Kontakt bzgl.<br>meiner Versicherungen mit mir auf:</h4> <form name="anfrage" ng-submit="sendAnfrage()"> <input type="radio" name="infos"> Schickt mir allgemeine Infos<br> <input type="radio" name="offerte"> Schickt mir eine Offerte </form>'),a.put("views/ergebnis.html",'<div id="loading" ng-show="hideLoading"> <div class="windows8" id="loading-image"> <div class="wBall" id="wBall_1"> <div class="wInnerBall"></div> </div> <div class="wBall" id="wBall_2"> <div class="wInnerBall"></div> </div> <div class="wBall" id="wBall_3"> <div class="wInnerBall"></div> </div> <div class="wBall" id="wBall_4"> <div class="wInnerBall"></div> </div> <div class="wBall" id="wBall_5"> <div class="wInnerBall"></div> </div> </div> <div class="loadingText"><p>Deine Anfrage<br>wird bearbeitet...</p></div> </div> <div ng-hide="hideLoading"> <div class="mustHaves"> <h2>Must have\'s</h2> <div class="item"> <h3>Haftpflichtversicherung</h3> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultec, pellentesque eu.</p> <p class="mehr"><i class="fa fa-angle-down"></i>&nbsp; mehr Infos zur Haftpflichtversicherung</p> </div> <div class="item"> <h3>Unfallversicherung</h3> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultec, pellentesque eu.</p> <p class="mehr"><i class="fa fa-angle-down"></i>&nbsp; mehr Infos zur Unfallversicherung</p> </div> </div> <div class="spacer"></div> <div class="niceToHaves"> <h2>Nice to have\'s</h2> <div class="item"> <h3>Unfallversicherung</h3> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultec, pellentesque eu.</p> <p class="mehr"><i class="fa fa-angle-down"></i>&nbsp; mehr Infos zur Unfallversicherung</p> </div> </div> <a class="button buttonLeft" ng-click="goBack()" title="Zurück zur Übersicht"><i class="fa fa-angle-left"></i> &nbsp;Zurück</a> <a class="button buttonRight" ng-click="anfrage()" title="Offerte stellen"><i class="fa fa-envelope-o"></i> &nbsp;Angebote einholen</a> <div class="clearfix"></div> </div>'),a.put("views/main.html",'<div class="left"> <form name="userForm" ng-submit="submitTesting()" class="form"> <select name="age" ng-model="user.age" ng-class="{inputOk: userForm.age.$dirty}" required> <option value="">Wie alt bist du?</option> <option value="1">16 – 20</option> <option value="2">21 – 30</option> <option value="3">31 – 50</option> <option value="4">51 – 60</option> <option value="5">61 – 99</option> </select> <br> <select name="work" ng-model="user.work" ng-class="{inputOk: userForm.work.$dirty}" required> <option value="">Dein Berufsstand</option> <option value="1">Schüler</option> <option value="2">Student</option> <option value="3">Angestellter</option> <option value="4">Selbstständig</option> <option value="5">Rentner</option> </select> <br> <select name="life" ng-model="user.life" ng-class="{inputOk: userForm.life.$dirty}" required> <option value="">Deine Lebenssituation</option> <option value="1">Ledig, keine Kinder</option> <option value="2">Ledig, Kind / Kinder</option> <option value="3">Verheiratet, keine Kinder</option> <option value="4">Verheiratet, Kind / Kinder</option> <option value="5">Getrennt Lebend</option> <option value="6">Verwitwet</option> </select> <br> <select name="risk" ng-model="user.risk" ng-class="{inputOk: userForm.risk.$dirty}" required> <option value="">Wie risikofreudig bist du?</option> <option value="1">Ich habe bock auf Risiko</option> <option value="2">Naja, geht so...</option> <option value="3">Auf keinen Fall ein Risiko!</option> </select> <br> <select name="car" ng-model="user.vehicle" ng-class="{inputOk: userForm.car.$dirty}" required> <option value="">Besitzt du ein Fahrzeug?</option> <option value="1">Ja</option> <option value="2">Nein</option> </select> <input type="submit" value="Jetzt testen" ng-mouseover="showPopover()" ng-mouseleave="hidePopover()"> <div ng-show="formIsOk" class="bubble"> Bitte wähle zuerst alle Felder aus. </div> </form> </div> <div class="right"> <div class="text"><p>Das ist ein Blintext und hat keine Bedeutung</p></div> <img id="facebook" src="../images/facebook-icon.b2efee09.png" alt="Find us on Facebook"> <div class="clearfix"></div> </div> <div class="clearfix"></div>')}]);