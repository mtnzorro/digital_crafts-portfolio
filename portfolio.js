var app = angular.module('Portfolio', ['ui.router']);

app.controller('homeController', function($scope, $stateParams, $state) {

});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state({
      name : 'home',
      url: '/',
      templateUrl: 'home.html',
      controller: 'homeController'
    })

    .state({
      name : 'project1',
      url: '/project1',
      templateUrl: 'project1.html',
      controller: 'homeController'
    })

    .state({
      name : 'project2',
      url: '/project2',
      templateUrl: 'project2.html',
      controller: 'homeController'
    })

    .state({
      name : 'project3',
      url: '/project3',
      templateUrl: 'project3.html',
      controller: 'homeController'
    })

    .state({
      name : 'contact',
      url: '/contact',
      templateUrl: 'contact.html',
      controller: 'homeController'
    });

    $urlRouterProvider.otherwise('/');

});
