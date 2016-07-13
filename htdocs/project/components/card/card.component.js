function CardComponentController() {
	var _this = {
		isFront: true,
		flipSide: flipSide,
		editableProperty: {},
		editProperty: editProperty,
		isPropertyEditable: isPropertyEditable
	}

	_.assign(this, _this);

	this.$onChanges = function(changes) {
		this.card = this.card.toJS();
	}

	function flipSide() {
		this.isFront = !this.isFront;
	}

	function editProperty(side, property) {
		if (this.isCardEditable) {
			this.editableProperty.side = side;
			this.editableProperty.property = property;
		}
	}

	function isPropertyEditable(side, property) {
		if (this.editableProperty.side === side && this.editableProperty.property === property) {
			return true;
		}
		return false;
	}
}

angular.module('app').component('flCard', {
	templateUrl: 'project/components/card/card.html',
	bindings: {
		card: '<',
		isCardEditable: '<'
	},
	controller: CardComponentController
});
