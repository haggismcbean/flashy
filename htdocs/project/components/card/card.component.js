function CardComponentController() {
	var _this = {
		isFront: true,
		flipSide: flipSide,
		update: update
	}

	_.assign(this, _this);

	this.$onChanges = function(changes) {
		this.card = this.card.toJS();
	}

	function flipSide() {
		this.isFront = !this.isFront;
	}

	function update(side, property, value) {
		this.onUpdate({
			card: this.card,
			side: side,
			property: property,
			value: value
		})
	}
}

angular.module('app').component('flCard', {
	templateUrl: 'project/components/card/card.html',
	bindings: {
		card: '<',
		isCardEditable: '<',
		onUpdate: '&'
	},
	controller: CardComponentController
});
