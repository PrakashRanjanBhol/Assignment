<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$emp_id = $_POST["emp_id"];
$user_id = $_POST["user_id"];

$sql = "call emp_deletion('".$emp_id."','".$user_id."')";

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