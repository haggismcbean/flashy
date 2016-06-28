function PileComponentController() {
	var _this = {
	}

	_.assign(this, _this);
}

angular.module('app').component('flPile', {
	templateUrl: 'project/components/pile/pile.html',
	bindings: {
		pile: '='
	},
	controller: PileComponentController
});
