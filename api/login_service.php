<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$user_name= $_POST["user_name"];
$pwd = $_POST["pwd"];

$sql = "SELECT * FROM  vw_user_mst where USER_NAME = '".$user_name."' and PWD = '".$pwd."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$id= $row["ID"];
    	$emp_id = $row["EMP_ID"];
		$is_admin = $row["IS_ADMIN"];
				
				$posts[] = array('id'=>$id,
					'emp_id'=>$emp_id,
									'is_admin'=>$is_admin);
    }
    header('Content-type: application/json');
			echo json_encode(array('status'=>'Success','result'=>$posts));	
} else {
   $response = "Failure";
		header('Content-type: application/json');
		echo json_encode(array('status'=>$response,'result'=>'Something Went Wrong...'));	
}
$conn->close();
?>