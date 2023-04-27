<?php
include("../PHP/_database.php");
// Read the JSON input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Check if the username already exists
$query = "SELECT * FROM users WHERE username = '".$data['check_username']."'";
$result = mysqli_query($connection, $query);
$username_exist = (mysqli_num_rows($result) > 0);

// Send a JSON response indicating the existence of the username
$response = array('username_exist' => $username_exist);
echo json_encode($response);

// Close the database connection
mysqli_close($connection);
?>