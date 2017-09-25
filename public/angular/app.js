var app = angular.module('MaalGaadi', [
	'ui.router'
]);

app.config(function($stateProvider, $qProvider) {
	$stateProvider.state('home', {
	    url: '/home/:id',
	    templateUrl: 'view/home.html',
	    controller: 'UserController'
    })
    .state('about', {
	    url: '/about',
	    templateUrl: 'view/about.html',
	  	controller: 'UserController'  
    });

    $qProvider.errorOnUnhandledRejections(false);
});