function DeckComponentController() {
	var _this = {
	}

	_.assign(this, _this);

	this.$onChanges = function(changes) {
		this.deck = this.deck.toJS();
	}
}

angular.module('app').component('flDeck', {
	templateUrl: 'project/components/deck/deck.html',
	bindings: {
		deck: '<'
	},
	controller: DeckComponentController
});
