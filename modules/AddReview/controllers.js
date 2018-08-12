'use strict';
 
angular.module('Home')
 
.controller('AddReviewController',
    ['$scope', '$rootScope', '$location','$cookieStore', 'AddReviewService',
    function ($scope, $rootScope, $location,$cookieStore, AddReviewService) {
       
       $rootScope.globals = $cookieStore.get('globals') || {};

              var formdata = new FormData();
              formdata.append("emp_id", $rootScope.globals.currentUser.obj.emp_id);
              AddReviewService.EmpReviewList(formdata,function(response) {
                 if(response.data.status == 'Success') {
                   $scope.empPerformanceList  = response.data.result;
                } else {
                    $scope.empPerformanceList = {};
                }
            });


           $scope.getEmpReviewList = function(no,performanceId)
            {
           var formdata = new FormData();
              formdata.append("emp_id", $rootScope.globals.currentUser.obj.emp_id);
              AddReviewService.EmpReviewList(formdata,function(response) {
                 if(response.data.status == 'Success') {
                   $scope.empPerformanceList  = response.data.result;
                } else {
                    $scope.empPerformanceList = {};
                }
            });
            }

        $scope.f1 = function(no,performanceId)
        {
         $('.stars'+performanceId). css("color","");
         $scope.noOfRatings = no;
          for(var i=0;i<=no;i++)
          {
          $('#stars'+performanceId+'id'+i).css("color","dodgerblue");
          }
        }



        $scope.AddFeedback = function(empPerformanceList,rowNo)
        {
              if($('#feedback'+rowNo).val() && $scope.noOfRatings)
              {
              var formdatas = new FormData();
              formdatas.append("performance_id", empPerformanceList.performance_id);
              formdatas.append("review", $('#feedback'+rowNo).val());
              formdatas.append("rating", ($scope.noOfRatings+1));

              AddReviewService.AddFeedback(formdatas,function(response) {
                 if(response.data.status == 'Success') {
                  alert("Feedback submited Successfully");
                  $scope.getEmpReviewList();
                } else {
                   alert("something went wrong");
                }
            });
              }
              else
              {
                alert("Any Field Cann't Left Empty");
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