const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const passwordBox = document.getElementById("password");
const usernameBox = document.getElementById("username");
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value === "") {
    usernameError.textContent = "Please enter your username";
    usernameBox.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
  } else {
    usernameError.textContent = "";
    usernameBox.style.boxShadow = "";
    resetFocus(usernameBox);
  }

  if (password.value === "") {
    passwordError.textContent = "Please enter your password";
    passwordBox.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
  } else {
    passwordError.textContent = "";
    passwordBox.style.boxShadow = "";
    resetFocus(passwordBox);
  }

  if (username.value !== "" && password.value !== "") {
    const card = document.getElementsByClassName("card-login")[0];
    
    // Implement wrong username and password testing here
    // agar login failed to ye true
    let incorrectUser = true;
    
    if(incorrectUser) {
      incorrectUserError.textContent = "Wrong Username / Password";      
      // Maybe remove these shadow thingies ?
      // card.style.boxShadow = "0px 0px 20px 2px var(--main-error-color)";
    } else {
      // Maybe remove these shadow thingies ?
      card.style.boxShadow = "0px 0px 20px 2px var(--main-correct-color)";      
      incorrectUserError.textContent = " ";

      form.submit();
    }
  }
});