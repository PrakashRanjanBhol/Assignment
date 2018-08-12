'use strict';
 
angular.module('Home')
 
.factory('PerformanceReviewService',
    ['$http', '$cookieStore', '$rootScope',
    function ($http, $cookieStore, $rootScope) {
        var service = {};

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



        service.EmployeePerformanceList = function (callback) {
             
             $http({
                        url: contextPath+'emp_performance_list.php',
                        method: 'POST',
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });
        };


        service.AssignReview = function (formdata, callback) {
             
             $http({
                        url: contextPath+'emp_performance_insertion.php',
                        method: 'POST',
                        data: formdata,
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });
        };


        service.UpdateReview = function (formdata, callback) {
             
             $http({
                        url: contextPath+'emp_review_update.php',
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