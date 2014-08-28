//(function () {
  
'use strict';

define([
	'angular'
	], function (angular) {

    
    // Create a new module
    angular.module('header.module', []);
    
    angular.module('header.module').run(function($rootScope, _) {	
    	console.log('header.module run');
    	$rootScope.$on('AddItemHeader', function(a, item) {
    	    
    		console.log('AddItemHeader received');
    
            console.log(a);
            console.log(item);
            
            $rootScope.itemsHeader.push(item);
            
    	});		
    
    
        $rootScope.itemsHeader = [];
    
    });
    
    angular.module('header.module').config(['$httpProvider', function($httpProvider) {
    	console.log('header.module config');
    }]);
  
})  
    
//})();