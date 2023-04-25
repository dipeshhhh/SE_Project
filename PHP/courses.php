<?php 
    include("../HTML/navbar-everyone.html");
    // include("../HTML/navbar-logged-in.html");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Courses | MonkeyLearn</title>
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/utils.css">
</head>
<body>
    <main>
        <div class="heading">
            <h1>
                <a href="#" id="course_category" class="colorBG hover-highlight text-decoration-none dropdown">ALL</a>
                <span class="colorH">COURSES</span>
            </h1>
            <div id="dropdown-options" class="dropdown-menu"> </div>
        </div>
        <div class="cards" id="card-container"></div>
    </main>
    <footer>

    </footer>
    <script src="../JS/courses.js"></script>
    <!-- <script src="../JS/loggedIn-index.js"></script> -->
</body>