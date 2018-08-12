'use strict';
 
angular.module('Home')
 
.controller('PerformanceReviewController',
    ['$scope', '$rootScope', '$location', 'PerformanceReviewService',
    function ($scope, $rootScope, $location, PerformanceReviewService) {
       

           PerformanceReviewService.EmployeeList(function(response) {
                if(response.data.status == 'Success') {
                   $scope.employeeList  = response.data.result;
                } else {
                    $scope.employeeList = {};
                }
            });


           
PerformanceReviewService.EmployeePerformanceList(function(response) {
                if(response.data.status == 'Success') {
                   $scope.empPerformanceList  = response.data.result;
                } else {
                    $scope.empPerformanceList = {};
                }
            });

$scope.getEmployeePerformanceList = function()
{
PerformanceReviewService.EmployeePerformanceList(function(response) {
                if(response.data.status == 'Success') {
                   $scope.empPerformanceList  = response.data.result;
                } else {
                    $scope.empPerformanceList = {};
                }
            });
}

           
           $scope.AssignReview = function()
           {
            if($scope.review_from && $scope.review_to && $scope.subject)
            {
              var formdata = new FormData();
              formdata.append("review_from", $scope.review_from);
              formdata.append("review_to", $scope.review_to);
              formdata.append("subject", $scope.subject);
           PerformanceReviewService.AssignReview(formdata,function(response) {
                if(response.data.status == 'Success') {
                    alert("Record has inserted sucessfully");
                  $scope.getEmployeePerformanceList();
                } else {
                    alert("Something Went Wrong");
                }
            });

            }
            else
            {
                alert("Please make sure that any field cann't be empty");
            }
           }



           
           $scope.VerifyBothEmpId = function(indication)
           {
             if($scope.review_from == $scope.review_to)
             {
               alert("Review From & Review To Cann't be same person");
              if(indication == 1)
              {
              $scope.review_from = "";
              }
              else
              {
              $scope.review_to = "";
              }
             }
           }

           $scope.f1 = function(no,performanceId)
        {
         $('.stars'+performanceId). css("color","");
          for(var i=0;i<=no;i++)
          {
          $('#stars'+performanceId+'id'+i).css("color","dodgerblue");
          }
        }




 $scope.f2 = function(no,performanceId)
        {
        $scope.empPerformanceObj.ratings = 0;
         $('.stars'+performanceId). css("color","");
         $scope.noOfRatings = parseInt(no)+1;
          for(var i=0;i<=no;i++)
          {
          $('#starss'+performanceId+'id'+i).css("color","dodgerblue");
          }
        }

         $scope.cancelModal = function () {
         $scope.getEmployeePerformanceList();
          $('.stars'+$scope.empPerformanceObj.performance_id). css("color","");
         $scope.showModal = false;
         }


        $scope.OpenUpdateModal = function(empPerformanceObj)
        {
         $scope.empPerformanceObj = empPerformanceObj;
         $scope.noOfRatings = empPerformanceObj.ratings;
         $scope.showModal = true;
        }


$scope.UpdateReview = function()
        {
        if($scope.empPerformanceObj.subject && $scope.empPerformanceObj.review && $scope.noOfRatings)
        {
              var formdata = new FormData();
              formdata.append("performance_id", $scope.empPerformanceObj.performance_id);
              formdata.append("subject", $scope.empPerformanceObj.subject);
              formdata.append("review", $scope.empPerformanceObj.review);
              formdata.append("rating", $scope.noOfRatings);
           PerformanceReviewService.UpdateReview(formdata,function(response) {
                if(response.data.status == 'Success') {
                    alert("Review has updated sucessfully");
                  $scope.getEmployeePerformanceList();
                   $scope.showModal = false;
                } else {
                    alert("Something Went Wrong");
                }
            });
        }
        else
        {
          alert("Any Field Cann't left empty");
        }
        }


    }])

.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});