<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$emp_id = $_POST["emp_id"];
$user_id = $_POST["user_id"];
$first_name= $_POST["first_name"];
$middle_name = $_POST["middle_name"];
$last_name = $_POST["last_name"];
$email_id = $_POST["email_id"];
$mobile_no = $_POST["mobile_no"];
$address = $_POST["address"];
$password = $_POST["password"];

$sql = "call emp_updation('".$emp_id."','".$user_id."','".$first_name."','".$middle_name."','".$last_name."','".$email_id."','".$mobile_no."','".$address."',
'".$password."')";

if ($conn->query($sql) === TRUE) {
header('Content-type: application/json');
			echo json_encode(array('status'=>'Success','result'=>'OK'));	
	}
 else {
   $response = "Failure";
		header('Content-type: application/json');
		echo json_encode(array('status'=>$response,'result'=>'Something Went Wrong...'));	
}
$conn->close();
?>