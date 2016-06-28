function ThumbCardComponentController() {
	var _this = {
	}

	_.assign(this, _this);

}

angular.module('app').component('flThumbCard', {
	templateUrl: 'project/components/thumb-card/thumb-card.html',
	bindings: {
		card: '='
	},
	controller: ThumbCardComponentController
});
