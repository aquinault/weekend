'use strict';

require.config({
    map: {
      '*': {
        'css': 'bower_components/require-css/css' 
      }
    },
	paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
		angular: 'bower_components/angular/angular',
		angularResource: 'bower_components/angular-resource/angular-resource',
		angularUiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',
		angularRoute: 'bower_components/angular-route/angular-route',
		angularMocks: 'bower_components/angular-mocks/angular-mocks',
		underscore: 'bower_components/underscore/underscore',
		text: 'bower_components/requirejs-text/text',
		bootstrap : 'bower_components/bootstrap/dist/js/bootstrap.min'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'jquery' :  {'exports' : 'jquery'},
		'bootstrap': ['jquery'],
		'underscore' : {'exports' : 'underscore'},
		'angularUiRouter': ['angular'],
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'jquery',
	'bootstrap',
	'components/app.module',
	'underscore',
	'css!bower_components/bootstrap/dist/css/bootstrap.min',
	'css!style/navbar-fixed-top'
], function(angular, jquery, bootstrap, app, _, css) {

	console.log('app : ' + app);

	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});

