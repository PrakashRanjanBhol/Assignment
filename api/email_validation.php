<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$email_id= $_POST["email_id"];

$sql = "SELECT * FROM  vw_user_mst where USER_NAME = '".$email_id."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    header('Content-type: application/json');
			echo json_encode(array('status'=>'Success','result'=>'1'));	
} else {
   header('Content-type: application/json');
            echo json_encode(array('status'=>'Success','result'=>'0')); 
}
$conn->close();
?>