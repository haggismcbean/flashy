describe('Component: flDeck', function () {
    var $rootScope;
    var scope;
    var $compile;
    var pScope;
    var deck = {};

    var ctrl;

    beforeEach(module('app'));
    beforeEach(module('stateMock'));
    beforeEach(module('ngMock'));
    beforeEach(module('templates'));

    beforeEach(function() {
        inject(function($componentController) {
            deck.toJS = jasmine.createSpy('toJS').and.returnValue(deck);

            ctrl = $componentController('flDeck',
                null,
                {deck: deck}
            );
        })
    })

    // Test the controller
    it('should initialise', inject(function($componentController) {
        expect(ctrl).toBeDefined();
    }));

    it('should update deck to a mutuable object when immutable deck is updated', inject(function($componentController) {
        ctrl.$onChanges();
        expect(ctrl.deck.toJS).toHaveBeenCalled();
    }));

});
