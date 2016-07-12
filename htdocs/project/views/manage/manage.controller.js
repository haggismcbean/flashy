app.controller('ManageController', [ function() {
	var decks = [
		{
			name: "Deck 1",
			id: 1,
			description: "first deck",
			cards: []
		},
		{
			name: "Deck 2",
			id: 2,
			description: "the second deck I made",
			cards: []
		}
	]

    var _ctrl = {
    	decks: decks
    }

    var ctrl = this;

    _.assign(ctrl, _ctrl);

}]);