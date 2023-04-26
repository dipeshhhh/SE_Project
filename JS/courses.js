import { Card } from "../JS/Modules/Card.js";

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

console.log(courses_fromDB);
console.log(categories_fromDB);
console.log(complete_categories_fromDB);

const card_container = document.getElementById("card-container");
for(let i=0; i<cards.length; i++){
    card_container.appendChild(cards[i].render());
}

// Implement category selection here
function getCoursesCategories() {
    const categories = ['ALL'];
    categories_fromDB.forEach((category_fromDB) => {
        if (!categories.includes(category_fromDB.category)) {
            categories.push(category_fromDB.category.toUpperCase());
        }
    });
    return categories;
}

const categories = getCoursesCategories(); // get categories from the courses.js file
const dropdownOptions = document.getElementById('dropdown-options');
const dropdownButton = document.getElementById('course_category');
const defaultCategory = dropdownButton.innerText;

// create the options and add click event listener to change the dropdown button text
categories.forEach((category) => {
    const option = document.createElement('a');
    option.href = '#';
    option.innerText = category;
    option.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownButton.innerText = category;
        // DOM editing here
        if(category.toString() === "ALL") {
            cards = [];
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
            card_container.innerHTML = "";
            for(let i=0; i<cards.length; i++) {
                card_container.appendChild(cards[i].render());
            }
        } else {
            card_container.innerHTML = "";
            let n_cat = category.toLowerCase();
            let cids = [];
            cards = [];
            for(let i=0; i<complete_categories_fromDB.length; i++) {
                if(complete_categories_fromDB[i].category == n_cat) {
                    cids.push(complete_categories_fromDB[i].cid);
                }
            }
            for(let i=0; i<courses_fromDB.length; i++) {
                if(cids.includes(courses_fromDB[i].cid)) {
                    cards.push(
                        new Card(
                            courses_fromDB[i].cid,
                            courses_fromDB[i].ctitle,
                            courses_fromDB[i].cdesc_short,
                            courses_fromDB[i].clink
                        )
                    );
                }
            }
            for(let i=0; i<cards.length; i++) {
                card_container.appendChild(cards[i].render());
            }
        }
    });
    dropdownOptions.appendChild(option);
});

// add click event listener to show/hide the dropdown options
dropdownButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (dropdownOptions.style.display === 'none') {
        dropdownOptions.style.display = 'block';
    } else {
        dropdownOptions.style.display = 'none';
    }
});

// add click event listener to hide the dropdown options when clicked outside
document.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown')) {
        dropdownOptions.style.display = 'none';
    }
});
