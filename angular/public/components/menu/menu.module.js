(function () {

    // Create a new module
    angular.module('menu.module', ['famous.angular']);
    
    angular.module('menu.module').run(function($rootScope) {
        console.log('menuModule run');
    
        var msg = {
            name: 'Menu',
            url: 'menu',
            index: 30
        };
    
        $rootScope.$broadcast('AddItemHeader', msg);
    
    });
    
    angular.module('menu.module').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log('menuModule config');
    
        //
        // Now set up the states
        $stateProvider.state('menu', {
            url: "/menu",
            controller: 'menuModule.controller',
            templateUrl: "components/menu/menu.html"
        });
    }]);
    
    
    angular.module('menu.module').controller('menuModule.controller', ['$rootScope', '$scope', '$famous', '_', function($rootScope, $scope, $famous, _) {
        console.log('menuModule controller');
    
        var Transitionable = $famous['famous/transitions/Transitionable'];
        var EventHandler = $famous['famous/core/EventHandler'];
    
    
        var Box = function(_name, _initialTranslate, _translate, _opacity, _size, _eventHandler, _expanded){
            
            this.initialTranslate = _initialTranslate;
            
            this.name = _name;
            this.translate = _translate;
            this.opacity = _opacity;
            this.size = _size;
            this.evt = _eventHandler;
            this.expanded = _expanded;
            this.index = 0;
        };
        Box.prototype.log = function() {
            console.log('box name:%s expanded:%s index:%d', this.name, this.expanded, this.index);
        };
        
        var eventHandlerA = new EventHandler();
    
    
        var boxA = new Box('A', [0, 0, 0], new Transitionable([0, 0, 0]), new Transitionable(0.3), new Transitionable([80, 80]), eventHandlerA, false);
        var boxB = new Box('B', [100, 0, 0], new Transitionable([100, 0, 0]), new Transitionable(0.3), new Transitionable([80, 80]), eventHandlerA, false);
        var boxC = new Box('C', [200, 0, 0], new Transitionable([200, 0, 0]), new Transitionable(0.3), new Transitionable([80, 80]), eventHandlerA, false);
    
        $scope.boxes = [];
        $scope.boxes.push(boxA);
        $scope.boxes.push(boxB);
        $scope.boxes.push(boxC);
        
        $scope.selectedIndex = 0;
    
    
        eventHandlerA.on('touchBox', function(data){
            console.log('Box: %s', data);
    
    
            var box1 = _.findWhere($scope.boxes, {name: data});
    
            //console.log('index : ' + _.indexOf($scope.boxes, box1) )
            $scope.selectedIndex =  _.indexOf($scope.boxes, box1);
    
    
    
            if(box1.expanded) {
                $scope.resetBox(box1);
            } else {
                $scope.animateBox(box1);
                
                _.each($scope.boxes, function(boxA) {
                    if(boxA.name != box1.name) {
                        $scope.resetBox(boxA);
                    }
                });
            }
            
            // LOG        
            _.each($scope.boxes, function(boxA) {
                boxA.log();
            });
    
        });
    
        $scope.animateBox = function(_box) {
            _box.translate.set([0, 10, 10], {
                duration: 300,
                curve: 'easeInOut'
            });
    
            _box.opacity.set(0.3, {
                duration: 300,
                curve: 'easeInOut'
            });
    
            _box.size.set([400, 500, ], {
                duration: 300,
                curve: 'easeOutBounce'
            });
            
            _box.expanded = true;
            _box.index = 10;
        }
    
        $scope.resetBox = function(_box) {
            _box.translate.set(_box.initialTranslate, {
                duration: 200,
                curve: 'easeInOut'
            });
    
            _box.opacity.set(1, {
                duration: 200,
                curve: 'easeInOut'
            });
    
            _box.size.set([80, 80, ], {
                duration: 200,
                curve: 'easeInOut'
            });
            
            _box.expanded = false;
            _box.index = 0;
        }
    
    
    
    
    
    
        /*
        var eventHandlerA = new EventHandler();
    
        eventHandlerA.on('1', function(data){
            console.log('1 direction');
            if(!$scope.box.expanded) {
                $scope.animateBox();
                $scope.resetBox2();
    
            } else {
                $scope.resetBox();
            }
            
            $scope.box.expanded = !$scope.box.expanded;
    
        });
        eventHandlerA.on('2', function(data){
            console.log('2 direction');
            if(!$scope.box2.expanded) {
                $scope.animateBox2();
                $scope.resetBox();
    
            } else {
                $scope.resetBox2();
            }
            
            $scope.box2.expanded = !$scope.box2.expanded;
    
        });
        
    
        $scope.box = {
            translate: new Transitionable([0, 0, 10]),
            opacity: new Transitionable(.3),
            size: new Transitionable([100, 100]),
            evt: eventHandlerA,
            expanded: false
        };
    
        $scope.box2 = {
            translate: new Transitionable([110, 0, 0]),
            opacity: new Transitionable(.3),
            size: new Transitionable([100, 100]),
            evt: eventHandlerA,
            expanded: false
        };
    
    
        $scope.animateBox = function() {
            $scope.box.translate.set([0, 10, 10], {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box.opacity.set(.3, {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box.size.set([400, 500, ], {
                duration: 500,
                curve: 'easeInOut'
            });
        }
    
        $scope.resetBox = function() {
            $scope.box.translate.set([0, 0, 0], {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box.opacity.set(1, {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box.size.set([100, 100, ], {
                duration: 500,
                curve: 'easeInOut'
            });
        }
    
        
        
        $scope.animateBox2 = function() {
            $scope.box2.translate.set([0, 0, 10], {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box2.opacity.set(.3, {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box2.size.set([400, 500, ], {
                duration: 500,
                curve: 'easeInOut'
            });
        }
    
        $scope.resetBox2 = function() {
            $scope.box2.translate.set([110, 0, 0], {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box2.opacity.set(1, {
                duration: 500,
                curve: 'easeInOut'
            });
    
            $scope.box2.size.set([100, 100, ], {
                duration: 500,
                curve: 'easeInOut'
            });
        }
        */
    
    }]);
})();