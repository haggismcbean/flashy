app.controller('DrillController', [ '$scope', function($scope) {
    var scope = {
    	testFunction: testFunction
    }

    _.assign($scope, scope);

    function testFunction() {
    	return true;
    }
}]);