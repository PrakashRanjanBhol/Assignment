'use strict';
 
angular.module('Home')
 
.controller('ManageEmployeeController',
    ['$scope', '$rootScope', '$location', 'ManageEmployeeService',
    function ($scope, $rootScope, $location, ManageEmployeeService) {


        $scope.operationType = true;
        $scope.email_id_update = false;

        ManageEmployeeService.EmployeeList(function(response) {
                if(response.data.status == 'Success') {
                   $scope.employeeList  = response.data.result;
                } else {
                    $scope.employeeList = {};
                }
            });



 $scope.CancelUpdate = function () {
$scope.operationType = true;
$scope.email_id_update = false;
$scope.first_name = "";
$scope.middle_name = "";
$scope.last_name = "";
$scope.email_id = "";
$scope.mobile_no = "";
$scope.address = "";
$scope.password = "";
$scope.confirm_password = "";
    }

        $scope.getEmpList = function () {
         ManageEmployeeService.EmployeeList(function(response) {
                if(response.data.status == 'Success') {
                   $scope.employeeList  = response.data.result;
                } else {
                    $scope.employeeList = {};
                }
            });
         }
 
        $scope.AddEmployee = function () {
            if($scope.first_name && $scope.middle_name && $scope.last_name && $scope.email_id && $scope.mobile_no && $scope.address && $scope.password && $scope.confirm_password)
            {
              if($scope.password == $scope.confirm_password)
              {
              var formdata = new FormData();
              formdata.append("first_name", $scope.first_name);
              formdata.append("middle_name", $scope.middle_name);
              formdata.append("last_name", $scope.last_name);
              formdata.append("email_id", $scope.email_id);
              formdata.append("mobile_no", $scope.mobile_no);
              formdata.append("address", $scope.address);
              formdata.append("password", $scope.password);

            ManageEmployeeService.AddEmployee(formdata, function(response) {
                if(response.data.status == 'Success') {
                    alert("Record Has Inserted Sucessfully");
                    $scope.getEmpList();
                    $scope.CancelUpdate();
                } else {
                     alert("Something Went Wrong");
                }
            });
            }
            else
              {
                alert("password Doesn't Match");
              }
          }
           else
           {
            alert("Please make sure that any field cannot be empty");
           }
        };


 $scope.UpdateEmployee = function (empList) {
$scope.email_id_update = true;
$scope.emp_id = empList.emp_id;
$scope.user_id = empList.user_id;
$scope.first_name = empList.first_name;
$scope.middle_name = empList.middle_name;
$scope.last_name = empList.last_name;
$scope.email_id = empList.email_id;
$scope.mobile_no = empList.mobile_no;
$scope.address = empList.address;
$scope.password = empList.pwd;
$scope.password = empList.pwd;
$scope.confirm_password = empList.pwd;
$scope.operationType = false;
        };




 $scope.EditEmployee = function () {
            if($scope.first_name && $scope.middle_name && $scope.last_name && $scope.email_id && $scope.mobile_no && $scope.address && $scope.password && $scope.confirm_password)
            {
              if($scope.password == $scope.confirm_password)
              {
              var formdata = new FormData();
              formdata.append("emp_id", $scope.emp_id);
              formdata.append("user_id", $scope.user_id);
              formdata.append("first_name", $scope.first_name);
              formdata.append("middle_name", $scope.middle_name);
              formdata.append("last_name", $scope.last_name);
              formdata.append("email_id", $scope.email_id);
              formdata.append("mobile_no", $scope.mobile_no);
              formdata.append("address", $scope.address);
              formdata.append("password", $scope.password);

            ManageEmployeeService.EditEmployee(formdata, function(response) {
                if(response.data.status == 'Success') {
                    alert("Record Has Updated Sucessfully");
                    $scope.email_id_update = false;
                    $scope.getEmpList();
                    $scope.CancelUpdate();
                } else {
                     alert("Something Went Wrong");
                }
            });
              }
              else
              {
                alert("password Doesn't Match");
              }
             
            }
           else
           {
            alert("Please make sure that any field cannot be empty");
           }
        };


        

         $scope.cancelModal = function () {
         $scope.showModal = false;
         }

         
         $scope.DeleteEmployee = function (empListObj) {
            $scope.delete_emp_id = empListObj.emp_id;
            $scope.delete_user_id = empListObj.user_id;
            $scope.showModal = true;
         }


         $scope.DeleteOkay = function () {
              var formdata = new FormData();
              formdata.append("emp_id", $scope.delete_emp_id);
              formdata.append("user_id",$scope.delete_user_id);
            ManageEmployeeService.DeleteEmployee(formdata, function(response) {
                if(response.data.status == 'Success') {
                    alert("Record Has Deleted Sucessfully");
                    $scope.getEmpList();
                    $scope.showModal = false;
                } else {
                     alert("Something Went Wrong");
                }
            });
         }


          $scope.EmailValidation = function()
        {
          var formdata = new FormData();
              formdata.append("email_id", $scope.email_id);
            ManageEmployeeService.EmailValidation(formdata, function(response) {
                if(response.data.result == '1') {
                    alert("Email Id already Exists");
                   $scope.email_id = "";
                } 
            });
        }



    }]);