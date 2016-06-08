angular.module('app').directive('flHeader', [function () {
    return {
        restrict: 'A',
        templateUrl: 'project/directives/header/header.html',
        replace: true
    };
}]);