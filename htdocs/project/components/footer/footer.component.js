angular.module('app').directive('flFooter', [function () {
    return {
        restrict: 'A',
        templateUrl: 'project/components/footer/footer.html',
        replace: true
    };
}]);