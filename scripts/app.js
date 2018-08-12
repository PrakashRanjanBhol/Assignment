'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', ['ui.bootstrap.modal']);

angular.module('BasicHttpAuthExample', [
    'Authentication',
    'Home',
    'ngRoute',
    'ngCookies'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
 
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .when('/ManageEmployee', {
            controller: 'ManageEmployeeController',
            templateUrl: 'modules/ManageEmployee/views/ManageEmployee.html'
        })

        .when('/PerformanceReview', {
            controller: 'PerformanceReviewController',
            templateUrl: 'modules/PerformanceReview/views/PerformanceReview.html'
        })

        .when('/AddReview', {
            controller: 'AddReviewController',
            templateUrl: 'modules/AddReview/views/AddReview.html'
        })

        
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }]);