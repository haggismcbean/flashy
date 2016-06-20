describe('Component: flCard', function () {

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
            ctrl = $componentController('flCard');
        })
    })

    // Test the controller

    it('should initialise', inject(function($componentController) {
        expect(ctrl).toBeDefined();
    }));

    it('should start off showing the front', inject(function($componentController) {
        expect(ctrl.isFront).toBe(true);
    }));

    it('should flip the card side', inject(function($componentController) {
        ctrl.flipSide();
        expect(ctrl.isFront).toBe(false);
    }));

});
