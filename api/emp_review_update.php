<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$performance_id= $_POST["performance_id"];
$subject = $_POST["subject"];
$review = $_POST["review"];
$rating = $_POST["rating"];

$sql = "update emp_performance_mst set SUBJECT = '".$subject."',REVIEW = '".$review."',RATINGS=".$rating.",REVIEW_STATUS='Y' where PERFORMANCE_ID = ".$performance_id."";

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