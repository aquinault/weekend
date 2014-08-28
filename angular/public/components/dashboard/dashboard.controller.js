'use strict';

define([
	'angular'
	], function (angular) {

    angular.module('dashboard.module').controller('dashboard.controller', ['$rootScope', '$scope', function($rootScope, $scope) {
    	console.log('dashboardModule controller');
    }]);

})  
    
