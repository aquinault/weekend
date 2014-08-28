'use strict';

define([
	'angular',
	'angularUiRouter',
	'css!style/main',
	'components/underscore/underscore.module',
	'components/header/header.module',
	'components/dashboard/dashboard.module',
	'components/cover/cover.module',
	], function (angular) {


		// Declare app level module which depends on filters, and services

        // Create a new module
        angular.module('app.module', ['ui.router', 'underscore.module', 'header.module', 'dashboard.module', 'cover.module', /*'menu.module', 'gallery.module'*/]);
        
        angular.module('app.module').run(function($rootScope, _) {
            console.log('appModule run');
        });
        
        angular.module('app.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            console.log('appModule config');

            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/cover");
          
        }]);

        return angular.module('app.module');
		
});

