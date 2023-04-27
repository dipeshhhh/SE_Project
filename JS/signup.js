const form = document.getElementById("loginSignup-form");

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirmpassword");
const error_message = document.getElementById("error_message");
const success_message = document.getElementById("success_message");
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

function isValidUsername(username) {
    let pattern = /^[a-z0-9_]+$/i;
    return pattern.test(username);
}

// Check if username/email is already taken or not
async function checkUserNameAndEmail(username, email) {
    let options = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({check_username: username, check_email: email})
    };

    let response = await fetch("../PHP/_signup-logic.php",options);
    let data = await response.json();

    return [data.username_taken, data.email_taken];
}

async function register_user(username, password, firstname, lastname, email) {
    let options = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({username: username, password: password, fname: firstname, lname: lastname, email: email})
    };

    let response = await fetch("../PHP/_signup-register-user.php",options);
    let data = await response.json();

    if(data.is_user_registered) {
        return [data.is_user_registered];
    } else {
        return [data.is_user_registered, data.registration_error];
    }
}

function capitalize(word){
    if(word.length > 1) {
        let cap_word = word.charAt(0).toUpperCase();
        cap_word += word.slice(1).toLowerCase();
        return cap_word;
    } else {
        return word;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const card = document.getElementsByClassName("card-loginSignup")[0];
    card.style.boxShadow = "0px 0px 11px -5px var(--main-box-shadow); ";

    error_message.textContent = "";
    success_message.textContent = "";

    let is_user_registered = null;
    username.value = username.value.toLowerCase();
    let registration_error = null;
    
    let check_fields = checkAllFields(all_fields);
    let is_username_valid = isValidUsername(username.value);
    let password_match = null;
    let is_username_taken = null;
    let is_email_taken = null;    
    
    if(!(is_username_valid)) {
        error_message.textContent = "Invalid Username: username must only contain alphabets(a-z) and digits (0-9), only underscore (_) is allowed as special character";
        username.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
    } else if(username.value.toString().length>30) {
        error_message.textContent = "Invalid Username: username should be less than 30 characters long";
        username.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
    } else if(!(password.value === confirm_password.value)) {
        error_message.textContent = "Passwords do not match!";
        password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        confirm_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        password_match = false;
    } else if (password.value.toString().length < 8) {
        error_message.textContent = "Password must be atleast 8 characters long";
        password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        confirm_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        password_match = false;
    } else {
        resetFocus(username);
        resetFocus(password);        
        resetFocus(confirm_password);
        password_match = true;
    }    

    if(check_fields && password_match && is_username_valid){
        firstname.value = capitalize(firstname.value);
        lastname.value = capitalize(lastname.value);
        
        checkUserNameAndEmail(username.value, email.value)
        .then((result) => {
            is_username_taken = result[0];
            is_email_taken = result[1];
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
                card.style.boxShadow = "0px 0px 20px 2px var(--main-correct-color)";
    
                register_user(username.value.toString(), password.value.toString(), firstname.value.toString(), lastname.value.toString(), email.value.toString()).then((result) => {
                    if(result[0]) {
                        error_message.textContent = ``;
                        success_message.textContent = "Registration successful! please log-in to continue";
                    } else {
                        error_message.textContent = `ERROR: ${result[1]}`;
                    }
                }).catch((error) => {console.log(error)});
                // form.submit();
            }
        }).catch((error) =>{
            console.log(error);
        });        
    } else if (checkAllFields(all_fields)){
    }
});