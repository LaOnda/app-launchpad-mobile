'use strict';

angular.module('lpApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/loginpage', {
        templateUrl: 'views/loginpage.html',
        controller: 'LoginpageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
    .run(function(){
        console.log("test");
    });
