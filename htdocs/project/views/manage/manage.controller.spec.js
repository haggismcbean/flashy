describe('controller: ManageController', function(){
    var scope;
    var ctrl;
    var Immutable = Immutable;
    
    beforeEach(function(){
        // boot modules
        module('app');
        module('stateMock');
        module('ngMock');
        module('templates');
        
        // Load controller
        scope = {};
        ctrl = $controller('ManageController', {$scope: scope});
    });
    
    it('should initialise', function(){
        expect(ctrl).toBeDefined();
    });
 
});