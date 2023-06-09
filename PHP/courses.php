<?php 
    include("../PHP/_set-navbar.php");
    include("../PHP/_database.php");
    include("../PHP/_check-logged-in.php");

    $get_all_courses = "SELECT * FROM courses ORDER BY ctitle ASC";
    $get_all_categories = "SELECT * From categories GROUP BY category";
    $get_complete_categories = "SELECT * From categories";
    
    $result = mysqli_query($connection, $get_all_courses); // No error here, it's a bug from a VS Code extention
    $result_category = mysqli_query($connection, $get_all_categories);
    $result_complete_category = mysqli_query($connection, $get_complete_categories);
    
    $courses = array();
    $categories = array();
    $complete_categories = array();

    while($row = mysqli_fetch_assoc($result)) {
        $courses[] =  $row;
    }
    while($row2 = mysqli_fetch_assoc($result_category)) {
        $categories[] =  $row2;
    }
    while($row3 = mysqli_fetch_assoc($result_complete_category)) {
        $complete_categories[] =  $row3;
    }
    
    $courses_json = json_encode($courses);
    $categories_json = json_encode($categories);
    $complete_categories_json = json_encode($complete_categories);

    // sending data to JavaScript
    echo "<script>const categories_fromDB = " . $categories_json . "; const courses_fromDB = " . $courses_json . "; const complete_categories_fromDB = ".$complete_categories_json."; </script>";
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
    <link rel="stylesheet" href="../CSS/courses.css">
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
    <script type="module" src="../JS/courses.js"></script>
</body>