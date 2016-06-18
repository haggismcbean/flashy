angular.module('app').directive('flCard', [function () {
    return {
        restrict: 'A',
        templateUrl: 'project/directives/card/card.html',
        replace: true
    };
}]);