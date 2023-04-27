import { Card } from "../JS/Modules/Card.js";

if(session_logged_in.toString() == "1"){
  session_logged_in = true;
}

// To shuffle the array coming from Database
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
// There is kinda no need to use this variable, because the shuffleArray() function updates the original array
let suffled_courses = shuffleArray(courses_fromDB);

// Setting up the textArray and cards array
let cards = [];
let textArray = [];

for(let i=0; i<courses_fromDB.length; i++) {
  textArray.push(courses_fromDB[i].ctitle);
  if(i<3){
    cards.push(
      new Card(
        courses_fromDB[i].cid,
        courses_fromDB[i].ctitle,
        courses_fromDB[i].cdesc_short,
        courses_fromDB[i].clink,
        session_logged_in,
        session_username
      )
    );
  }
}

// This part is to show the recommended cards
const card_container = document.getElementById("card-container");
card_container.appendChild(cards[0].render());
card_container.appendChild(cards[1].render());
card_container.appendChild(cards[2].render());

// This part is for the infinitely updating Learn <course> text
let index = 0; // wut dis index do? I forgor x_x
const textElement = document.getElementById("text");

function typeWriter(text, i, callback) {
  if (i < text.length) {
    textElement.innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1, callback), 100);
  } else {
    callback();
  }
}

function eraseText(i, callback) {
  if (i >= 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, i);
    setTimeout(() => eraseText(i - 1, callback), 50);
  } else {
    callback();
  }
}

function typeAndEraseText() {
  const currentText = textArray[index % textArray.length];
  index++;

  typeWriter(currentText, 0, () => {
    setTimeout(() => {
      textElement.classList.add("erasing");
      eraseText(textElement.innerHTML.length - 1, () => {
        textElement.classList.remove("erasing");
        typeAndEraseText();
      });
    }, 1000);
  });
}
typeAndEraseText();