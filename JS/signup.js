const form = document.getElementById("loginSignup-form");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirmpassword");
const error_message = document.getElementById("error_message");
let all_fields = [firstname, lastname, username, email, password, confirm_password];


function resetFocus(element) {
    element.addEventListener("focus", () => {
      element.style.boxShadow = "0 0 0 0.2rem var(--main-highlight-color)"
    });
    element.addEventListener("blur", () => {
      element.style.boxShadow = "0 0 0 0 var(--main-highlight-color)"
    });
}

function checkEmpty(element) {
    if (element.value === "") {
        element.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        error_message.textContent = "Please fill in all the fields";
        return true;
    } else {
        element.style.boxShadow = "";
        resetFocus(element);
        return false;
    }
}

function checkAllFields(fields){
    allFieldsFilled = true;
    for(element of fields){
        if(checkEmpty(element)){
            allFieldsFilled = false;
        }
    }
    return allFieldsFilled;
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    check_fields = checkAllFields(all_fields);
    password_match = null;

    if(!(password.value === confirm_password.value)) {
        error_message.textContent = "Passwords do not match!";
        password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        confirm_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        password_match = false;
    } else {
        resetFocus(password);
        resetFocus(confirm_password);
        password_match = true;
    }
    
    if(check_fields && password_match){
    // if(true){ // this is for testing
        // Check if username/email is already taken or not
        // currently set for testing
        is_username_taken = true;
        is_email_taken = true;
        
        if(is_email_taken && is_username_taken) {
            error_message.textContent = "Username and Email are already taken";
        }
        else if(is_username_taken) {
            error_message.textContent = "Username is already taken";
        }
        else if(is_email_taken) {
            error_message.textContent = "Email is already taken";
        }
        else {
            const card = document.getElementsByClassName("card-loginSignup")[0];
            card.style.boxShadow = "0px 0px 20px 2px var(--main-correct-color)";             
            form.submit();
        }
    }
});