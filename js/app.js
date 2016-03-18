var app = angular.module('meanTeaApp', ['ngRoute'])

		app.config(function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/home.html',
					controller: 'MainController'
				})
				.when('/checkout', {
					templateUrl: 'partials/checkout.html',
					controller: 'CheckoutController'
				})
				.otherwise('/')
		})
