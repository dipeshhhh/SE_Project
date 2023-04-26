export class Card {
    constructor(courseId, title, description, image='#') {
        this.title = title;
        this.description = description;
        this.courseLink = `../PHP/view-course.php?cid=${courseId}`;
        this.image = `${image}images/main.png`;
    }
  
    render() {
        // Creating A Card
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        
        // Image size (px): 380 x 200 (W x H)
        // Below image is for testing
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