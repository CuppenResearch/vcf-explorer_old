'use strict';

/**
 * @ngdoc overview
 * @name vcfExplorerApp
 * @description
 * # vcfExplorerApp
 *
 * Main module of the application.
 */
var vcfExplorerApp = angular.module('vcfExplorerApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',

    'CornerCouch',
    'angularUtils.directives.dirPagination',
    'vcfExplorerApp.development',
    //'vcfExplorerApp.production',
    'vcfExplorerControllers',
    'vcfExplorerServices',
    'vcfExplorerFilters'
  ]);

vcfExplorerApp.config(
  function ($routeProvider) {
    $routeProvider
      .when('/samples', {
        templateUrl: 'views/samples.html',
        controller: 'SamplesCtrl'
      })
      .when('/sample_vars/:sampleKey', {
        templateUrl: 'views/sampleVars.html',
        controller: 'SampleVarsCtrl'
      })
      .when('/runs',{
        templateUrl: 'views/runs.html',
        controller: 'RunsCtrl'
      })
      .when('/run/:runKey', {
        templateUrl: 'views/run.html',
        controller: 'RunCtrl'
      })
      .otherwise({
        redirectTo: '/samples'
      });
  });
