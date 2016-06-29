function CardComponentController() {
	var _this = {
		isFront: true,
		flipSide: flipSide
	}

	_.assign(this, _this);

	function flipSide() {
		this.isFront = !this.isFront;
	}
}

angular.module('app').component('flCard', {
	templateUrl: 'project/components/card/card.html',
	bindings: {
		card: '<'
	},
	controller: CardComponentController
});
