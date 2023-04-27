<?php
    include("../HTML/navbar-login-signup.html");
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up | MonkeyLearn</title>
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/utils.css">
    <link rel="stylesheet" href="../CSS/login-signup.css">
</head>

<body>
    <main>
        <div class="card-loginSignup">

            <!-- Icon here -->
            <img src="#" alt="MonkeyLearn" class="card-loginSignup-item">

            <!-- Need php action here -->
            <form id="loginSignup-form" action="signup.php" method="post">
            <!-- <form id="loginSignup-form" method="post"> -->
                <div class="register-name">
                    <div class="register-name">
                        <input type="text" id="firstname" name="firstname" placeholder="First name">
                    </div>

                    <div class="register-name">
                        <input type="text" id="lastname" name="lastname" placeholder="Last name">
                    </div>
                </div>

                <div class="form-group">
                    <input type="text" id="username" name="username" placeholder="Username">
                </div>

                <div class="form-group">
                    <input type="email" id="email" name="email" placeholder="Email">
                </div>

                <div class="form-group">
                    <input type="password" id="password" name="password" placeholder="Password">
                </div>

                <div class="form-group">
                    <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password">
                </div>

                <!-- To display error message the space between starting and ending tag is necessary -->
                <div id="error_message" class="form-group error-message"> </div>
                <div id="success_message" class="form-group success-message"> </div>

                <div class="form-group">
                    <button type="submit" class="btn" id="register-button">Sign Up</button>
                </div>
            </form>

            <h5 class="card-loginSignup-item">
                <p>Already Registered? <a href="login.php">Login</a></p>
            </h5>
        </div>
    </main>
    <footer>
    </footer>
    <script src="../JS/signup.js"></script>
</body>

</html>