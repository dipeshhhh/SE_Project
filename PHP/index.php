<?php 
    include("../PHP/_set-navbar.php");
    include("../PHP/_database.php");
    include("../PHP/_check-logged-in.php");
    
    $get_all_courses = "SELECT * FROM courses";
    $result = mysqli_query($connection, $get_all_courses); // No error here, it's a bug from a VS Code extention
    
    $courses = array();

    while($row = mysqli_fetch_assoc($result)) {
        $courses[] =  $row;
    }

    $courses_json = json_encode($courses);

    // sending data to JavaScript
    echo "<script>const courses_fromDB = " . $courses_json . ";</script>";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>MonkeyLearn | Online learning platform</title>
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/utils.css">
</head>
<body>
    <main>
        <section class="welcome-screen">
            <div class="welcome-writing">
                <h1 class="welcome-user">Welcome to Monkey Learn</h1>
                <h3>Monkey see, monkey learn!</h3>
                
                <br>

                <!-- This should also dynamically change as different course's names -->
                <h4>
                    <span id="learnText">Learn </span><div id="text-container">
                        <span id="text"></span><span id="cursor"></span>
                    </div>
                </h4>

                <p class="welcome-message">Welcome to MonkeyLearn! Our platform offers a wide range of courses taught by experts, designed to help you achieve your learning goals. With our user-friendly interface and interactive tools, learning has never been easier. Take courses at your own pace from anywhere in the world. Thank you for choosing us as your learning partner!</p>
            </div>
            <div class="welcome-image">
                <!-- Need this image -->
                <img src="../res/welcome/welcome.png" alt="Welcome Image" height="350px">
            </div>
        </section>
        <section id="recommended-courses" class="recommended-courses slider">
            <div class="recommended-header">
                <h2>Recommended Courses</h2>
            </div>
            <!-- Below div is dynamically updated by JavaScript -->
            <div class="cards" id="card-container"></div>
        </section>
    </main>
    <footer></footer>
    <script type="module" src="../JS/index.js"></script>
</body>
</html>