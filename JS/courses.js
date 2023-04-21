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


// This array should get all the courses from database upload datewise (newest first)
let cards = [
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Code"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Code"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Universe"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Universe"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Universe"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Universe"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Universe"),
    new Card("Title", "Description", "#", "https://source.unsplash.com/380x200/?Robot")
];

divThingy = document.getElementById("card-container");
for(let i=0; i<cards.length; i++){
    divThingy.appendChild(cards[i].render());
}

// Implement category selection here