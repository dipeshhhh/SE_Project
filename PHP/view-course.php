<?php 
    include("../PHP/set-navbar.php");
    include("../PHP/database.php");

    if (isset($_GET['cid'])) {
        $cid = $_GET['cid'];
        
        $get_videos = "SELECT * FROM videos WHERE cid='".$cid."' ORDER BY vid_no ASC";
        $get_courseName = "SELECT ctitle FROM courses WHERE cid='".$cid."'";

        $result = mysqli_query($connection, $get_videos);
        $result_courseName = mysqli_query($connection, $get_courseName);

        $videos = array();
        $courseName = array();

        while($row1 = mysqli_fetch_assoc($result)) {
            $videos[] = $row1;
        }
        while($row2 = mysqli_fetch_assoc($result_courseName)) {
            $courseName[] = $row2;
        }

        $videos_json = json_encode($videos);
        $courseName_json = json_encode($courseName);

        echo "<script> const videos_json = ".$videos_json."; const courseName_fromDB = ".$courseName_json."; </script>";

      } else {
        echo "<script>alert('Illegal opening of this page go back!')</script>";
      }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="head-title"> </title>    
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/utils.css">
    <link rel="stylesheet" href="../CSS/view-course.css">
</head>
<body>
    <main>
        <!-- ALL OF THIS WILL BE DYNAMIC USING JS -->
        <section class="video-container" id="video-container">
            <video id="video-player" controls>
                <source src="../res/courses/default/videos/chapter_1.mp4" type="video/mp4">
            </video>
            <div class="playlist-container">
                <h2 id="playlist-title"> </h2>
                <div class="playlist-items" id="playlist-items">
                    
                </div>
            </div>
        </section>

        <section class="video-information-container">
            <h2 id="video-title"> </h2>
            <p id="video-description"> </p>
        </section>

        <section class="navigation-buttons">
            <button id="previous-btn" class="nav-button">Previous</button>
            <span class="empty-space-fill"> </span>
            <button id="next-btn" class="nav-button">Next</button>
        </section>
    </main>
    <footer></footer>
    <script src="../JS/view-course.js"></script>
    <!-- <script src="../JS/loggedIn-index.js"></script> -->
</body>
</html>