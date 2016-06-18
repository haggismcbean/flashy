describe('Component: flCard', function () {

    var $rootScope;
    var scope;
    var $compile;
    var pScope;

    beforeEach(module('app'));
    beforeEach(module('stateMock'));
    beforeEach(module('ngMock'));
    beforeEach(module('templates'));

    beforeEach(function(){
        // inject
        inject(function ($rootScope, _$controller_, _$state_, _$compile_) {
            $controller = _$controller_;
            $compile = _$compile_;

            // isoscope
            pScope =  $rootScope.$new();

            // directives 
            el = angular.element('<div fl-card></div>');
            $compile(el)(pScope);
            $rootScope.$digest();
            scope = el.isolateScope() || el.scope();
        });

    });

    it('should initialise', function(){
        expect(scope).toBeDefined();
    });

    it('should show the front at the start', function() {
        expect(scope.isFront).toBe(true);
    })

    it('should flip card side', function(){
        scope.flipSide();
        expect(scope.isFront).toBe(false);
    });

});
