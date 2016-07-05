describe('Component: flPile', function () {
    var $rootScope;
    var scope;
    var $compile;
    var pScope;
    var pile = {};

    var ctrl;

    beforeEach(module('app'));
    beforeEach(module('stateMock'));
    beforeEach(module('ngMock'));
    beforeEach(module('templates'));

    beforeEach(function() {
        inject(function($componentController) {
            pile.toJS = jasmine.createSpy('toJS').and.returnValue(pile);

            ctrl = $componentController('flPile',
                null,
                {pile: pile}
            );
        })
    })

    // Test the controller
    it('should initialise', inject(function($componentController) {
        expect(ctrl).toBeDefined();
    }));

    it('should update pile to a mutuable object when immutable pile is updated', inject(function($componentController) {
        ctrl.$onChanges();
        expect(ctrl.pile.toJS).toHaveBeenCalled();
    }));

});
