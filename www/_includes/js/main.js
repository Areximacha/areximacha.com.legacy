//Makes the script run again when the page is reached again via the back button
window.onunload = function(){};

var App = angular.module('App', ['ngRoute', 'ngResource']);

//router
App.config(function ($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: '_includes/js/templates/home.tpl',
        controller: 'homeController'
    });

    $locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

});

App.controller('homeController', ['$scope', '$log', function($scope, $log) {

    console.log('home');

}]);