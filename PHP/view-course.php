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
    <title>&lt;Course_Name&gt; | MonkeyLearn</title>    
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
            <h2 id="video-title">This is chapter 1</h2>
            <p id="video-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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