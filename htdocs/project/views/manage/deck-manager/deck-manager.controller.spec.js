describe('controller: ManageDeckController', function(){
    var ctrl;
    var Immutable = Immutable;

    var scope;
    var stateParams;
    
    beforeEach(function(){
        // boot modules
        module('app', function($provide) {
            $provide.value('deckService', deckService = {});
        });
        module('stateMock');
        module('ngMock');
        module('templates');

        inject(function($injector, $rootScope) {
        	scope = $rootScope.$new();
        })

        // Spies
        deckService.updateDeck = jasmine.createSpy('updateDeck').and.returnValue(true);
        
        // Load controller
        stateParams = {
        	deckId: 1
        }
        ctrl = $controller('ManageDeckController', {
        	$scope: scope, 
        	$stateParams: stateParams
        });
    });
    
    it('should initialise', function(){
        expect(ctrl).toBeDefined();
    });

    it('should update the card when new value provided', function() {
    	ctrl.updateCard('front', 'title', 'new');
    	expect(ctrl.card.get('front').title).toBe('new');
    })

    xit('should save changes to the deckService', function() {
    	ctrl.save();
    	expect(deckService.updateDeck).toHaveBeenCalled();
    })
 
});