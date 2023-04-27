import { Card } from "../JS/Modules/Card.js";

let error_message = document.getElementById("error-message");
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
///////////////////////////////////////////////////////////
// These will come from DB after starting the session
let userName_fromDB = userInfo_fromDB[0].username;
let firstName_fromDB = userInfo_fromDB[0].fname;
let lastName_fromDB = userInfo_fromDB[0].lname;
let email_fromDB = userInfo_fromDB[0].email;

const first_name = document.getElementById("firstName");
const last_name = document.getElementById("lastName");
const user_name = document.getElementById("userName");
const user_email = document.getElementById("userEmail");
const change_password = document.getElementById("changePassword");

first_name.textContent = `${firstName_fromDB}`;
last_name.textContent = `${lastName_fromDB}`;
user_name.textContent = `${userName_fromDB}`;
user_email.textContent = `${email_fromDB}`;

let cards = [];
for(let i=0; i<courses_fromDB.length; i++) {
    cards.push(
    new Card(
        courses_fromDB[i].cid,
        courses_fromDB[i].ctitle,
        courses_fromDB[i].cdesc_short,
        courses_fromDB[i].clink
    )
    );
  }

const card_container = document.getElementById("card-container");
for(let i=0; i<cards.length; i++) {
    card_container.appendChild(cards[i].render());
}