//(function () {
  
'use strict';

define([
	'angular'
	], function (angular) {


    // Create a new module
    angular.module('cover.module', []);
    
    angular.module('cover.module').run(function($rootScope, _) {
        console.log('coverModule run');
        
    	var msg = {
    		name : 'Home',
    		url : 'cover',
    		index : 1 
    	};
    
    	$rootScope.$broadcast('AddItemHeader', msg);
    
    });
    
    angular.module('cover.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log('coverModule config');
    
        //
        // Now set up the states
        $stateProvider.state('cover', {
            url: "/cover",
//            controller: 'cover.controller',
            templateUrl: "components/cover/cover.html",
            resolve : {
                simpleObj:  function($q){
                    console.log('cover.controller resolve');
                    
                    var deferred = $q.defer();
                    require(['components/cover/cover.controller'], function(module) {
                        deferred.resolve();
                    });
                    
                    // et retourne un promise à Angular
                    return deferred.promise;
                 }
            }
            
        });
    }]);
    


})  