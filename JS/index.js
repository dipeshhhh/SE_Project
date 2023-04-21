// Things currently required from database:
// .top 3 courses
// .and link to their resourses (inside res folder) i.e. image, title, description

// This part is for dynamic top3 courses heading
// These array should contain the top 3 most viewed courses in past week from the DataBase
let topCoursesArray = ["Course 1", "Course 2", "Course 3"];
// These are links corresponding to the respective courses
let topCoursesArrayLinks = ["#", "#", "#"];
let headerCourses = [
  document.getElementById("TC1"),
  document.getElementById("TC2"),
  document.getElementById("TC3"),
]
for(let i=0; i<3; i++){
  headerCourses[i].textContent = topCoursesArray[i];
  headerCourses[i].href = topCoursesArrayLinks[i];
}

// This part is for the infinitely updating Learn <course> text
// This array should be updated by course names from Database
let textArray = ["Some Course", "Another Course", "Yet Another Course"];
let index = 0;

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

// This part is for generating and displaying cards

// Maybe Make a module for this card thing

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

divThingy = document.getElementById("card-container");
divThingy.appendChild(cards[0].render());
divThingy.appendChild(cards[1].render());
divThingy.appendChild(cards[2].render());