angular.module('app').directive('flCard', [function () {
    
	function controller($scope) {

		var scope = {
			isFront: true,
			flipSide: flipSide
		}

		_.assign($scope, scope);

		function flipSide() {
			$scope.isFront = !$scope.isFront;
		}
	}

    return {
        restrict: 'A',
        templateUrl: 'project/components/card/card.html',
        replace: true,
        controller: controller
    };
}]);