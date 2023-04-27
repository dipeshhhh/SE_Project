<?php
include("../PHP/_database.php");
// Read the JSON input data
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$is_password_correct = null;

// Check if the username already exists
$query = "SELECT * FROM users WHERE username = '".$data['check_username']."'";
$result = mysqli_query($connection, $query);

while($row = mysqli_fetch_assoc($result)) {
    if(password_verify($data['check_password'], $row['password'])) {
        $is_password_correct = true;        
        // start session here        
        session_start();
        $_SESSION['username'] = $data['check_username'];
        $_SESSION['is_logged_in'] = true;

        $response = array('is_password_correct' => $is_password_correct);
        echo json_encode($response);
        mysqli_close($connection);
        exit();                
    } else {
        $is_password_correct = false;        
        $response = array('is_password_correct' => $is_password_correct);
        echo json_encode($response);
        mysqli_close($connection);
    }
}
?>