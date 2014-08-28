(function () {

    // Create a new module
    angular.module('gallery.module', []);
    
    angular.module('gallery.module').run(function($rootScope, _) {	
    	console.log('galleryModule run');
    
    	var msg = {
    		name : 'Gallery',
    		url : 'gallery',
    		index : 12 
    	};
    
    	$rootScope.$broadcast('AddItemHeader', msg);
    });
    
    angular.module('gallery.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log('galleryModule config');
    
        //
        // Now set up the states
        $stateProvider.state('gallery', {
            url: "/gallery",
            controller: 'gallery.controller',
            templateUrl: "components/gallery/gallery.html"
        });
        
    
    }]);
    
    
    angular.module('gallery.module').controller('gallery.controller', ['$rootScope', '$scope', function($rootScope, $scope) {
    	console.log('galleryModule controller');
    }]);

})();