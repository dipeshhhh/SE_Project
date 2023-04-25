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
userName_fromDB = "dipeshhhh_cvs";
firstName_fromDB = "Dipesh";
lastName_fromDB = ".";
email_fromDB = "kvdipesh@gmail.com";

const userName_show = document.getElementById("user-name");
userName_show.textContent = `${userName_fromDB}`; 

const first_name = document.getElementById("firstName");
const last_name = document.getElementById("lastName");
const user_name = document.getElementById("userName");
const user_email = document.getElementById("userEmail");
const change_password = document.getElementById("changePassword");

first_name.textContent = `${firstName_fromDB}`;
last_name.textContent = `${lastName_fromDB}`;
user_name.textContent = `${userName_fromDB}`;
user_email.textContent = `${email_fromDB}`;
////////////////////////////////////////////////////////

const view_change = document.getElementById("changePassword");
const form = document.getElementById("changePassword-form");
const change_password_button = document.getElementById("change-password-confirm");

// Form-fields
let old_password = document.getElementById("old-password");
let new_password = document.getElementById("new-password");
let new_confirm_password = document.getElementById("confirm-new-password");
const all_fields = [old_password, new_password, new_confirm_password];

view_change.addEventListener('click', () => {
    if(form.style.display.toString() === "none"){
        form.style.display = "inline-block";
        error_message.style.display = "block";
        view_change.textContent = "Cancel";
    } else {
        form.style.display = "none";
        error_message.style.display = "none";
        view_change.textContent = "Change Password";
    }
});

form.addEventListener("submit", () => {
    event.preventDefault();
    
    check_fields = checkAllFields(all_fields);    
    old_password_correct = null;
    new_password_match = null;
    
    // Check for new password fields here
    if(!(new_password.value.toString() === new_confirm_password.value.toString())) {
        error_message.textContent = "Error: Passwords do not match!";
        new_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        new_confirm_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        new_password_match = false;
    } else if(new_password.value.toString().length<8) {
        error_message.textContent = "Error: New password must be at least 8 characters long!";
        new_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
        new_confirm_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
    } else {
        resetFocus(new_password);
        resetFocus(new_confirm_password);
        new_password_match = true;
    }

    // Check for old password here
    old_password_correct = false;
    if(!old_password_correct) {
        error_message.textContent = "Error: Incorrect old password";
        old_password.style.boxShadow = "0 0 0 0.2rem var(--main-error-color)";
    } 

    if(check_fields && old_password_correct && new_password_match) {
        form.submit();
    }
});


/////////////////////////////////////////////////////////
class Card {
    constructor(title, description, courseLink='#', image='#') {
        this.title = title;
        this.description = description;
        this.courseLink = courseLink;
        this.image = image;
    }

    render() {
        // Creating A Card
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        
        // Image size (px): 380 x 200 (W x H)
        // Need to make custom temporary course image
        // <img src="https://source.unsplash.com/380x200/?Code">
        
            // Creating link to course (so that when card is clicked on user will go to the course page)
            const cardLink = document.createElement("a");
            cardLink.classList.add("link-to-course");
            cardLink.href = `${this.courseLink}`;
            
                // Adding Card Item div
                const cardItem = document.createElement("div");
                cardItem.classList.add("card-item")

                    // Adding Card Image
                    const cardImage = document.createElement("img");
                    cardImage.setAttribute("src", `${this.image}`);
                    cardImage.setAttribute("alt", `${this.title}`);
                    cardImage.setAttribute("width", "380");
                    cardImage.setAttribute("height", "200");
                    cardItem.appendChild(cardImage);
                    
                    // Div Element to contain title and description
                    const textDiv = document.createElement("div");
                    textDiv.classList.add("lines");
                    textDiv.classList.add("text-center");   

                        // Adding Card Title
                        const titleParagraph = document.createElement("p");
                        titleParagraph.classList.add("card-title");
                        titleParagraph.innerText = `${this.title}`;
                        

                        // Adding Card Description
                        const descriptionParagraph = document.createElement("p");
                        descriptionParagraph.classList.add("card-description");
                        descriptionParagraph.innerText = `${this.description}`;
                    
                    textDiv.appendChild(titleParagraph);
                    textDiv.appendChild(descriptionParagraph);
                cardItem.appendChild(textDiv);
            cardLink.appendChild(cardItem);
        cardElement.appendChild(cardLink);

        return cardElement;
    }
}

// This array should be updated by 3 courses from Database
// can use machine learning here to recommend user some courses
let cards = [
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Code"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Universe"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Robot")
];

card_container = document.getElementById("card-container");
for(let i=0; i<cards.length; i++) {
    card_container.appendChild(cards[i].render());
}