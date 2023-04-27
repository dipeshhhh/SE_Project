<?php 
    session_start();
    if((isset($_SESSION['is_logged_in'])) && ($_SESSION['is_logged_in'] == true)) {
        include("../PHP/_navbar-logged-in.php");
    } else {
        include("../HTML/navbar-everyone.html");
    }
?>