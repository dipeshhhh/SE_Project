const form = document.getElementById("loginSignup-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const incorrectUserError = document.getElementById("incorrect-user");

function resetFocus(element) {
  element.addEventListener("focus", () => {
    element.style.boxShadow = "0 0 0 0.2rem var(--main-highlight-color)"
  });
  element.addEventListener("blur", () => {
    element.style.boxShadow = "0 0 0 0 var(--main-highlight-color)"
  });
}

let is_username_correct = null;

// Check if username exists
async function checkUserName(username) {
  let options = {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify({check_username: username})
  };

  let response = await fetch("../PHP/_login-logic.php",options);
  let data = await response.json();

  return [data.username_exist];
}

async function loginUser(username, password){
  let options = {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({check_username: username, check_password: password})
  };

  let response = await fetch("../PHP/_login-user.php",options);
  let data = await response.json();

  if(data.is_password_correct == false) {
    return [data.is_password_correct];
  } else {
    return [true];
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const card = document.getElementsByClassName("card-loginSignup")[0];
  card.style.boxShadow = "0px 0px 11px -5px var(--main-box-shadow)";
  
  username.value = username.value.toString().toLowerCase();
  let username_exist = null;
  let is_password_correct = null;

  if (username.value === "") {
    usernameError.textContent = "Please enter your username";
    username.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
  } else {
    usernameError.textContent = "";
    username.style.boxShadow = "";
    resetFocus(username);
  }

  if (password.value === "") {
    passwordError.textContent = "Please enter your password";
    password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
  } else {
    passwordError.textContent = "";
    password.style.boxShadow = "";
    resetFocus(password);
  }

  if (username.value !== "" && password.value !== "") {
    
    usernameError.textContent = "";
    username.style.boxShadow = "";
    passwordError.textContent = "";
    password.style.boxShadow = "";
    resetFocus(username);
    resetFocus(password);
    
    // Implement wrong username and password testing here
    checkUserName(username.value)
    .then((result) => {
      username_exist = result[0];
      if(!username_exist){
        usernameError.textContent = "Username does not exists";
        username.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
      } else {
        // check for password
        loginUser(username.value.toString(), password.value.toString())
        .then((result) => {
          is_password_correct = result[0];
          console.log(is_password_correct);
          if(!is_password_correct) {
            passwordError.textContent = "Incorrect password!";
            password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";            
          } else {
            card.style.boxShadow = "0px 0px 20px 2px var(--main-correct-color)";
            window.location.href = "../PHP/index.php";
          }
        }).catch((error) => {console.log(error)});
      }
    }).catch((error) => {console.log(error)});
  }
});