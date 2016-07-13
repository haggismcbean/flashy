app.controller('ManageDeckController', [ '$stateParams', 'deckService', function( $stateParams, deckService ) {
	var deck = deckService.getDeck($stateParams.deckId);

    var _ctrl = {
    	deck: deck.cards
    }


    var ctrl = this;


    _.assign(ctrl, _ctrl);

}]);