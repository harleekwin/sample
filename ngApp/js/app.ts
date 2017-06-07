'use strict';

namespace app {
  angular.module('test', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker'])
    .config((
      $stateProvider: ng.ui.IStateProvider,
      $locationProvider: ng.ILocationProvider,
      $urlRouterProvider: ng.ui.IUrlRouterProvider,
      filepickerProvider) => {

      filepickerProvider.setKey('AYlIsIFaRNm82R61GpBKz');

      $stateProvider.state('Home', {
        url: '/',
        templateUrl: '/ngApp/views/home.html',
        controller: test.Controllers.HomeController,
        controllerAs: 'controller'
      })
        .state('notFound', {
          url: '/notFound',
          templateUrl: '/ngApp/views/notFound.html'
        });

      $urlRouterProvider.otherwise('/notFound');
      $locationProvider.html5Mode(true);

    });
