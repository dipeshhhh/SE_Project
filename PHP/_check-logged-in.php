<?php
error_reporting(E_ERROR | E_PARSE);
session_start();
$session_logged_in = null;
$session_username = null;
if((isset($_SESSION['is_logged_in'])) && ($_SESSION['is_logged_in'] == true)) {
    $session_logged_in = true;
    $session_username = $_SESSION['username'];
    echo "<script>let session_logged_in = ".$session_logged_in."; const session_username = '".$session_username."';</script>";
} else {
    $session_logged_in = "haha";
    $session_username = "cantman";
    echo "<script>let session_logged_in = '".$session_logged_in."'; const session_username = '".$session_username."';</script>";
}
?>