<?php
error_reporting(0);
include("config.php");
date_default_timezone_set("Asia/Kolkata");

$review_from= $_POST["emp_id"];

$sql = "SELECT * FROM  vw_emp_performance_mst where REVIEW_FROM_ID = '".$review_from."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$performance_id= $row["PERFORMANCE_ID"];
        $review_to_id= $row["REVIEW_TO_ID"];
        $review_to_name= $row["REVIEW_TO_NAME"];
    	$subject= $row["SUBJECT"];
    	$review= $row["REVIEW"];
        $ratings= $row["RATINGS"];
        $review_status= $row["REVIEW_STATUS"];
    	
				$posts[] = array('performance_id'=>$performance_id,
                    'review_to_id'=>$review_to_id,
                    'review_to_name'=>$review_to_name,
					'subject'=>$subject,
                    'review'=>$review,
					'ratings'=>$ratings,
                    'review_status'=>$review_status);
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