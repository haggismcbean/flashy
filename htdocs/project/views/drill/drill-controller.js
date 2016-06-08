app.controller('DrillController', [ '$scope', function($scope) {
    var scope = {
    	test: testFunction
    }

    _.assign($scope, scope);

    function testFunction() {
    	return true;
    }
}]);