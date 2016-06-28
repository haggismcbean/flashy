describe('Component: flPile', function () {

    var $rootScope;
    var scope;
    var $compile;
    var pScope;

    var ctrl;

    beforeEach(module('app'));
    beforeEach(module('stateMock'));
    beforeEach(module('ngMock'));
    beforeEach(module('templates'));

    beforeEach(function() {
        inject(function($componentController) {
            ctrl = $componentController('flPile');
        })
    })

    // Test the controller

    it('should initialise', inject(function($componentController) {
        expect(ctrl).toBeDefined();
    }));

});
