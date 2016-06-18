describe('Directive: flHeader', function () {

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
            el = angular.element('<div fl-header></div>');
            $compile(el)(pScope);
            $rootScope.$digest();
            scope = el.isolateScope() || el.scope();
        });

    });

    it('It should initialise', function(){
        expect(scope).toBeDefined();
    });

});
