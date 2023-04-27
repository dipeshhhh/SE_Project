<header>
    <link rel="stylesheet" href="../CSS/navbar.css">
    <nav class="navbar">
        <ul class="navbar__menu">
            <li id="icon-and-name" class="navbar__left">
                <!-- Icon here -->
                <a href="../PHP/index.php"> <img src="" alt="Icon"> </a>
                <a href="../PHP/index.php">MonkeyLearn</a>
            </li>
            <li id="courses" class="navbar__center">
                <a href="../PHP/courses.php">Courses:</a>
                
                <!-- link to courses here (course names should be dynamically updated (top 3 most viewed courses))-->
                
                <!-- WARNING: The empty space between is necessary  -->
                <a href="#" id="TC1"> </a>
                <a href="#" id="TC2"> </a>
                <a href="#" id="TC3"> </a>
            </li>
            <!-- dropdownbtn = lg-dropdown -->
            <li class="navbar__right">
                <a href="#" id="user-name"><?php echo $_SESSION['username']?></a>
                <div class="lg-dropdown">
                    <a href="#" id="lg-dropbtn"></a>
                    <div class="dropdown-content">
                        <a href="#" id="profile-link">Profile</a>
                        <a href="#"id="logout-link">Logout</a>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
    <div class="progressBar"> </div>
    <script src="../JS/navbar-logged-in.js"></script>
</header>