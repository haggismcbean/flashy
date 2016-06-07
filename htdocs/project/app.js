var app = angular.module('app', ['ui.router']);

app.config( [ function() {

    $locationProvider.html5Mode(true);
    
    // set default state:
    // Use function instead of $urlRouterProvider.otherwise('hub')
    // because bug makes it infinite redirect loop
    $urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get('$state');
        $state.go('hub');
    });

    $stateProvider
    .state('privacy.policy', {
        url:'/privacy',
        templateUrl: PRIVACY,
        data: {
            title: 'Privacy Policy'
        }
    });
}]);

app.run( [ function () {

}]);

app.controller('AppController', [ function() {
    console.log("here");
}]);
