<?php
include("../PHP/_database.php");
// Read the JSON input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$uid = null;

$get_uid = "SELECT uid FROM users WHERE username = '".$data['set_username']."'";
$result_uid = mysqli_query($connection, $get_uid);
while($row1 = mysqli_fetch_assoc($result_uid)) {
    $uid = $row1['uid'];
}

// Check if the username already exists
$query = "SELECT * FROM enrolled_courses WHERE cid = '".$data['set_courseId']."' AND uid = '".$uid."'";
$result = mysqli_query($connection, $query);

if(mysqli_num_rows($result) < 1){
    $insert_query = "INSERT INTO enrolled_courses (cid, uid) VALUES('".$data['set_courseId']."','".$uid."')";
    mysqli_query($connection, $insert_query);
}

$response = array('something' => true);
echo json_encode($response);

// Close the database connection
mysqli_close($connection);
?>