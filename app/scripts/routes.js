'use strict';

/**
 * @ngdoc overview
 * @name vtApp
 * @description
 * # vtApp
 *
 * All Main Routes of the application.
 */

vtApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
	})
	.when('/productlisting', {
		templateUrl: 'views/productlisting.html',
		controller: 'ProductCtrl',
		controllerAs: 'ProductCtrl'
	})
	.when('/explorelist', {
		templateUrl: 'views/explorelist.html',
		controller: 'ExploreCtrl',
		controllerAs: 'ExploreCtrl'
	})
	.when('/professionalslist', {
		templateUrl: 'views/professionallisting.html',
		controller: 'ProfessionalCtrl',
		controllerAs: 'ProfessionalCtrl'
	})
	.when('/professionaldetails', {
		templateUrl: 'views/professionaldetails.html',
		controller: 'ProfessionalCtrl',
		controllerAs: 'ProfessionalCtrl'
	})
	.when('/productdetails/:id', {
		templateUrl: 'views/productdetails.html',
		controller: 'ProductCtrl',
		controllerAs: 'ProductCtrl'
	})
	.when('/manufacturerlist', {
		templateUrl: 'views/manufacturerlisting.html',
		controller: 'ManufacturerCtrl',
		controllerAs: 'ManufacturerCtrl'
	})
	.when('/manufacturerdetails', {
		templateUrl: 'views/manufacturerdetails.html',
		controller: 'ManufacturerCtrl',
		controllerAs: 'ManufacturerCtrl'
	})
	.when('/exploredetails', {
		templateUrl: 'views/exploredetails.html',
		controller: 'ExploreCtrl',
		controllerAs: 'ExploreCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
});