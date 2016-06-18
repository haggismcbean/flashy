angular.module('app').directive('flFooter', [function () {
    return {
        restrict: 'A',
        templateUrl: 'project/directives/footer/footer.html',
        replace: true
    };
}]);