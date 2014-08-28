//(function () {
  
'use strict';

define([
	'angular'
	], function (angular) {

    
    // Create a new module
    angular.module('dashboard.module', []);
    
    angular.module('dashboard.module').run(function($rootScope, _) {	
    	console.log('dashboardModule run');
    
    	var msg = {
    		name : 'Dashboard',
    		url : 'dashboard',
    		index : 10 
    	};
    
    	$rootScope.$broadcast('AddItemHeader', msg);
    });
    
    angular.module('dashboard.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log('dashboardModule config');
    
        //
        // Now set up the states
        $stateProvider.state('dashboard', {
            url: "/dashboard",
//            controller: 'dashboard.controller',
            templateUrl: "components/dashboard/dashboard.html",
            
            resolve : {
                simpleObj:  function($q){
                    console.log('dashboard.controller resolve');
                    
                    var deferred = $q.defer();
                    require(['components/dashboard/dashboard.controller'], function(module) {
                        deferred.resolve();
                    });
                    
                    // et retourne un promise à Angular
                    return deferred.promise;
                 }
            }
            
        });
        


    }]);
    
    /*
    angular.module('dashboard.module').controller('dashboard.controller', ['$rootScope', '$scope', function($rootScope, $scope) {
    	console.log('dashboardModule controller');
    }]);
    */
})  
    
//})();