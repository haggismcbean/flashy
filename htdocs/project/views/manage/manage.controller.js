app.controller('ManageController', [ 'deckService', function(deckService) {
	var decks = deckService.getAllDecks();

    var _ctrl = {
    	decks: decks.toJS()
    }

    var ctrl = this;

    _.assign(ctrl, _ctrl);

}]);