angular.module('app').directive('flHeader', [function () {
    return {
        restrict: 'A',
        templateUrl: 'project/components/header/header.html',
        replace: true
    };
}]);