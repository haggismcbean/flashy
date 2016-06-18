describe('controller: Drill', function(){
    var $rootScope;
    var $compile;
    var scope;
    var $controller;
    var ctrl;
    var $state;

    beforeEach(function(){
        // boot modules
        module('app');
        module('stateMock');
        module('ngMock');
       
        // inject
        inject(function ($rootScope, _$controller_, _$state_, _$compile_) {
            scope = $rootScope.$new();
            $controller = _$controller_;
            $state = _$state_;
            $compile = _$compile_;
        });

        ctrl = $controller('DrillController', {
            $scope: scope
        });
    });
    
    it('It should initialise', function(){
        expect(scope).toBeDefined();
    });

    it('Should return true when test function is ran', function(){
        scope.$apply();
        expect(scope.testFunction()).toBe(true);
    })

});