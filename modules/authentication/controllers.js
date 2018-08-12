'use strict';
 
angular.module('Authentication')
 
.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
            $scope.dataLoading = true;
            var formdata = new FormData();
              formdata.append("user_name", $scope.username);
              formdata.append("pwd", $scope.password);
            AuthenticationService.Login(formdata, function(response) {
                if(response.data.status == 'Success') {
                    AuthenticationService.SetCredentials($scope.username, $scope.password,response.data.result[0]);
                   // $location.path('/home');
                   if(response.data.result[0].is_admin=='Y')
                   {
                    $location.path('/ManageEmployee');
                   }
                   else if(response.data.result[0].is_admin=='N')
                   {
                    $location.path('/AddReview');
                   }
                    
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);