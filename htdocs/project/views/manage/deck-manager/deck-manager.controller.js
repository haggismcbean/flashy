app.controller('ManageDeckController', [ '$stateParams', 'deckService', function( $stateParams, deckService ) {
	var deck = deckService.getDeck($stateParams.deckId);

    var _ctrl = {
    	deck: deck.cards,
    	displayNextCard: displayNextCard
    }

    var ctrl = this;
    
    _.assign(ctrl, _ctrl);

    ctrl.displayNextCard();

    function displayNextCard() {
        ctrl.card = ctrl.deck.first();
        ctrl.deck = ctrl.deck.shift();
    }

}]);