<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$sql = "SELECT * FROM  vw_emp_mst";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$emp_id= $row["EMP_ID"];
    	$user_id= $row["USER_ID"];
    	$pwd= $row["PWD"];
    	$first_name= $row["FIRST_NAME"];
    	$first_name= $row["FIRST_NAME"];
    	$middle_name= $row["MIDDLE_NAME"];
    	$last_name= $row["LAST_NAME"];
				$email_id = $row["EMAIL_ID"];
				$mobile_no = $row["MOBILE_NO"];
				$address = $row["ADDRESS"];

				$posts[] = array('emp_id'=>$emp_id,
					'user_id'=>$user_id,
					'pwd'=>$pwd,
					'first_name'=>$first_name,
					'middle_name'=>$middle_name,
					'last_name'=>$last_name,
									'email_id'=>$email_id,
								    'mobile_no'=>$mobile_no,
								    'address'=>$address);
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