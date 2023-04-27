<?php 
    include("../PHP/_navbar-logged-in.php");
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
                    <p>First name: </p>
                    <p>Last name: </p>
                    <p>Username: </p>
                    <p>Email: </p>
                    <p>Password: </p>
                </div>
                <div class="value">
                    <p id="firstName"></p>
                    <p id="lastName"><p>
                    <p id="userName"></p>
                    <p id="userEmail"></p>
                    <button id="changePassword" class="up-button">Change Password</button>
                    <form action="change-password.php" method="post" id="changePassword-form">
                        <input type="password" name="old-password" id="old-password" class="up-input" placeholder="Old Password">
                        <input type="password" name="new-password" id="new-password" class="up-input" placeholder="New Password">
                        <input type="password" name="confirm-new-password" id="confirm-new-password" class="up-input" placeholder="Confirm New Password">
                        <button type="submit" class="up-button" id="change-password-confirm">Change</button>
                    </form>
                    <div id="error-message" class="error-message"> </div>
                </div>
            </div>
            <div class="grow-space"> </div>
            <img src="../res/GUI/edit.png" alt="Edit" id="edit-profile">
        </section>
        <section id="enrolled-courses">
            <h1 class="up-heading">Enrolled Courses</h1>
            <div class="cards" id="card-container"> </div>
        </section>
    </main>
    <footer></footer>
    <script src="../JS/user-profile.js"></script>
</body>
</html>