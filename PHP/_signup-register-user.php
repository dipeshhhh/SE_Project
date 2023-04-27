<?php
include("../PHP/_database.php");

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$username = $data['username'];
$password = $data['password'];
$fname = $data['fname'];
$lname = $data['lname'];
$email = $data['email'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// to check for registration success
$is_user_registered = null;
$registration_error = null;
$response = null;

$register_user = "INSERT INTO users (username, password, fname, lname, email) VALUES ('".$username."','".$hashed_password."','".$fname."','".$lname."','".$email."')";

if(mysqli_query($connection, $register_user)){
    $is_user_registered = true;
    $response = array('is_user_registered' => $is_user_registered);
} else {
    $is_user_registered = false;
    $registration_error = mysqli_error($connection)."";
    $response = array('is_user_registered' => $is_user_registered, 'registration_error' => $registration_error);
}

// Send a JSON response indicating the availability of the username and email
echo json_encode($response);
?>