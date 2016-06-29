function PileComponentController() {
	var _this = {
	}

	_.assign(this, _this);

	this.$onChanges = function(changes) {
		this.pile = this.pile.toJS();
	}
}

angular.module('app').component('flPile', {
	templateUrl: 'project/components/pile/pile.html',
	bindings: {
		pile: '<'
	},
	controller: PileComponentController
});
