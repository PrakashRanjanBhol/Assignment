'use strict';
 
angular.module('Home')
 
.factory('ManageEmployeeService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.AddEmployee = function (formdata, callback) {
             
             $http({
                        url: contextPath+'employee_insertion.php',
                        method: 'POST',
                        data: formdata,
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });


        };


        service.EmployeeList = function (callback) {
             
             $http({
                        url: contextPath+'employeelist_service.php',
                        method: 'POST',
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });
        };


service.EditEmployee = function (formdata, callback) {
             
             $http({
                        url: contextPath+'employee_updation.php',
                        method: 'POST',
                        data: formdata,
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });
        };


service.DeleteEmployee = function (formdata, callback) {
             
             $http({
                        url: contextPath+'employee_deletion.php',
                        method: 'POST',
                        data: formdata,
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });
        };



service.EmailValidation = function (formdata, callback) {
             
             $http({
                        url: contextPath+'email_validation.php',
                        method: 'POST',
                        data: formdata,
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });
        };
        
 
      
        return service;
    }]);