function DeckComponentController() {
	var _this = {
	}

	_.assign(this, _this);
}

angular.module('app').component('flDeck', {
	templateUrl: 'project/components/deck/deck.html',
	bindings: {
		deck: '='
	},
	controller: DeckComponentController
});
