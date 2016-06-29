describe('controller: DrillController', function(){
    var scope;
    var ctrl;
    var Immutable = Immutable;
    
    beforeEach(function(){
        // boot modules
        module('app');
        module('stateMock');
        module('ngMock');
        module('templates');
        
        // Load controller
        scope = {};
        ctrl = $controller('DrillController', {$scope: scope});
    });
    
    it('should initialise', function(){
        expect(ctrl).toBeDefined();
    });

    it('should add a card to the correct array if answer is correct', function(){
        ctrl.answer(true);
        expect(ctrl.correct.size).toBe(1);
    });

    it('should add a card to the incorrect array if answer is incorrect', function(){
        ctrl.answer(false);
        expect(ctrl.incorrect.size).toBe(1);
    });

    it('should hide the correct and incorrect buttons if there are no cards left in the deck', function() {
        ctrl.deck = [];
        ctrl.answer(true);
        expect(ctrl.isEndOfDeck).toBe(true);
    })

    it('should show the finished card if there are no cards left in the deck', function() {
        ctrl.deck = [];
        ctrl.answer(true);
        expect(ctrl.card === ctrl.finishedCard).toBe(true);
    })
    
});