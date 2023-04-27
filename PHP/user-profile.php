<?php 
    session_start();
    include("../PHP/_navbar-logged-in.php");
    include("../PHP/_database.php");

    // Getting uid
    $get_uid = "SELECT * FROM users WHERE username = '".$_SESSION['username']."'";
    $result_uid = mysqli_query($connection, $get_uid);
    $user_info = array();
    while($row1 = mysqli_fetch_assoc($result_uid)) {
        $uid = $row1['uid'];
        $user_info[] = $row1;
    }
    $user_info_json = json_encode($user_info);
    
    // Getting the cids
    $get_cids = "SELECT cid FROM enrolled_courses WHERE uid='".$uid."'";
    $result = mysqli_query($connection, $get_cids);
    $cids = array();
    while($row = mysqli_fetch_assoc($result)) {
        $cids[] =  $row;
    }
    $cids_json = json_encode($cids);
    
    // Getting course content from cids
    $courses = array();
    foreach($cids as $cid){
        foreach($cid as $ci){
            $get_courses = "SELECT * FROM courses WHERE cid='".$ci."'";
            $result = mysqli_query($connection, $get_courses);
            while($row = mysqli_fetch_assoc($result)) {
                $courses[] =  $row;
            }            
        }
    }
    $courses_json = json_encode($courses);

    echo "<script>const userInfo_fromDB = " . $user_info_json . ";</script>";    
    echo "<script>const courses_fromDB = " . $courses_json . ";</script>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile | MonkeyLearn</title>    
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/utils.css">
    <link rel="stylesheet" href="../CSS/user-profile.css">
</head>
<body>
    <main>
        <h1 class="up-heading">User Profile</h1>
        <section id="user-details">
            <div id="basic-details">
                <div class="key">
                    <p class="key-item">First name: </p>
                    <p class="key-item">Last name: </p>
                    <p class="key-item">Username: </p>
                    <p class="key-item">Email: </p>
                </div>
                <div class="value">
                    <p id="firstName" class="value-item"></p>
                    <p id="lastName" class="value-item"><p>
                    <p id="userName" class="value-item"></p>
                    <p id="userEmail" class="value-item"></p>
                </div>
            </div>
        </section>
        <section id="enrolled-courses">
            <h1 class="up-heading">Enrolled Courses</h1>
            <div class="cards" id="card-container"> </div>
        </section>
    </main>
    <footer></footer>
    <script type="module" src="../JS/user-profile.js"></script>
</body>
</html>