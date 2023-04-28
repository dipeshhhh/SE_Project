const profile_link = document.getElementById("profile-link");
const logout_link = document.getElementById("logout-link");

// logout logic
logout_link.addEventListener('click', () => {
  window.location.href = "../PHP/_logout-logic.php";
})