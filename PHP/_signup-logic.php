<?php
include("../PHP/_database.php");
// Read the JSON input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Check if the username already exists
$query = "SELECT * FROM users WHERE username = '".$data['check_username']."'";
$result = mysqli_query($connection, $query);
$username_taken = (mysqli_num_rows($result) > 0);

// Check if the email is already registered
$query = "SELECT * FROM users WHERE email = '".$data['check_email']."'";
$result = mysqli_query($connection, $query);
$email_taken = (mysqli_num_rows($result) > 0);

// Send a JSON response indicating the availability of the username and email
$response = array('username_taken' => $username_taken, 'email_taken' => $email_taken);
echo json_encode($response);

// Close the database connection
mysqli_close($connection);
?>