describe('module: App', function(){
    var $rootScope;
    var $compile;
    var scope;
    var $controller;
    var ctrl;
    var $state;
    var $location;

    beforeEach(function(){
        // boot modules
        module('app');
        module('stateMock');
       	module('ngMock');

        // inject
        inject(function ($rootScope, _$controller_, _$state_, _$compile_, _$location_) {
            scope = $rootScope.$new();
            $controller = _$controller_;
            $state = _$state_;
            $location = _$location_;
            $compile = _$compile_;
        });

        ctrl = $controller('AppController', {
            $scope: scope
        });
    });
    
    it('It should initialise', function(){
        expect(scope).toBeDefined();
    });

});