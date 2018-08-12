'use strict';
 
angular.module('Home')
 
.factory('AddReviewService',
    ['$http', '$cookieStore', '$rootScope',
    function ($http, $cookieStore, $rootScope) {
        var service = {};
        
 service.EmpReviewList = function (formdata,callback) {
             
             $http({
                        url: contextPath+'emp_review.php',
                        method: 'POST',
                        data: formdata,
                        headers: { 'Content-Type': undefined}
                    }).then(function successCallback(response) {
                      callback(response);
                    }, function errorCallback(response) {
                        callback(response);
                    });
        };

service.AddFeedback = function (formdata,callback) {
             
             $http({
                        url: contextPath+'emp_feedback_submit.php',
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