function DeckSummaryComponentController() {
	var _this = {
	}

	_.assign(this, _this);

}

angular.module('app').component('flDeckSummary', {
	templateUrl: 'project/components/deck-summary/deck-summary.html',
	bindings: {
		deck: '<'
	},
	controller: DeckSummaryComponentController
});
