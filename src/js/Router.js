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
