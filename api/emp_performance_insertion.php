<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$review_from= $_POST["review_from"];
$review_to = $_POST["review_to"];
$subject = $_POST["subject"];

$sql = "INSERT INTO emp_performance_mst (REVIEW_FROM_ID, REVIEW_TO_ID, SUBJECT,REVIEW,RATINGS,REVIEW_STATUS) values		
		('".$review_from."','".$review_to."','".$subject."','',0,'N')";

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