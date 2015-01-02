'use strict';

/**
 * @ngdoc overview
 * @name angularjsApp
 * @description
 * # angularjsApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url:'/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('contact',{
        url:'/contact',
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      });
  });
