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
    
    it('should initialise', function(){
        expect(scope).toBeDefined();
    });

    xit('should display finished card if no deck cards left', function() {
        scope.$apply();
        // scope.deck = [];
        // scope.answer(true);
        expect(scope.deck).toBe(true);
    })

});