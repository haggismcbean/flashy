app.controller('ManageDeckController', [ '$scope', '$stateParams', 'deckService', function( $scope, $stateParams, deckService ) {
	var deck = deckService.getDeck($stateParams.deckId).cards;

    var _ctrl = {
    	deck: deck,
    	displayNextCard: displayNextCard,
    	updateCard: updateCard,
        save: save
    }

    var ctrl = this;
    
    _.assign(ctrl, _ctrl);

    ctrl.displayNextCard();

    function displayNextCard() {
        if (ctrl.card === undefined) {
            ctrl.card = ctrl.deck.first();
            ctrl.deck = ctrl.deck.shift();
        }
    }

    function updateCard(side, property, value) {
        ctrl.card = ctrl.card.toJS();
        ctrl.card[side][property] = value;
        ctrl.card = Immutable.Map(ctrl.card);
    }

    function save() {
        ctrl.deck = ctrl.deck.push(ctrl.card);
        deckService.updateDeck(ctrl.deck);
        ctrl.deck = ctrl.deck.pop();
    }

}]);