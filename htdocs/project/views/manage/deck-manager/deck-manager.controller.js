app.controller('ManageDeckController', [ '$stateParams', 'deckService', function( $stateParams, deckService ) {
	var deck = deckService.getDeck($stateParams.deckId);

    var _ctrl = {
    	deck: deck.cards,
    	displayNextCard: displayNextCard,
    	updateCard: updateCard
    }

    var ctrl = this;
    
    _.assign(ctrl, _ctrl);

    ctrl.displayNextCard();

    function displayNextCard() {
        ctrl.card = ctrl.deck.first();
        ctrl.deck = ctrl.deck.shift();
    }

    function updateCard(card, side, property, value) {
    	console.log("tada!!!");
    	console.log(card);
    	console.log(side);
    	console.log(property);
    	console.log(value);
    }

}]);