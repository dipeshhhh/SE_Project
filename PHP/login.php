<?php
    include("../HTML/navbar-login-signup.html");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | MonkeyLearn</title>
    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" href="../CSS/utils.css">
    <link rel="stylesheet" href="../CSS/login-signup.css">
</head>
<body>
    <main>
        <div class="card-loginSignup">
            
            <!-- Icon here -->
            <a href="../PHP/index.php"><img src="../res/GUI/icon.png" alt="MonkeyLearn" class="card-loginSignup-item-s"></a>
            <p>Login</p>

             <form action="login.php" id="loginSignup-form" method="post">
                <div class="form-group">
                    <input type="text" id="username" name="username" placeholder="Username">
                    <div class="error-message" id="username-error"></div>
                </div>
                
                <div class="form-group">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <div class="error-message" id="password-error"></div>
                </div>

                <div id="incorrect-user" class="form-group"> </div>
                
                <div class="form-group">
                    <button type="submit" class="btn">Login</button>
                </div>
            </form>
            <h5 class="card-loginSignup-item"><p>New here? <a href="signup.php">Sign Up</a></p></h5>
        </div>
    </main>

    <footer>        
    </footer>
    
    <script src="../JS/login.js"></script>
</body>
</html>