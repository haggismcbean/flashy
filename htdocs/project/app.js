var app = angular.module('app', ['ui.router']);

app.config( [ 
    '$locationProvider', 
    '$urlRouterProvider', 
    '$stateProvider',
function(
    $locationProvider, 
    $urlRouterProvider,
    $stateProvider
) {

    $locationProvider.html5Mode(true);
    
    // set default state:
    // Use function instead of $urlRouterProvider.otherwise('hub')
    // because bug makes it infinite redirect loop
    $urlRouterProvider.otherwise( function($injector, $location) {
        var $state = $injector.get('$state');
        $state.go('home');
    });

    $stateProvider
    .state('home', {
        url:'/home',
        templateUrl: 'project/views/drill/drill.html'
    })
    .state('manage', {
        url:'/manage',
        templateUrl: 'project/views/manage/manage.html'
    })
    .state('components', {
        url:'/components',
        templateUrl: 'project/views/components/components.html'
    });
}]);

app.run( [ function () {

}]);

app.controller('AppController', [ function() {
    
}]);
