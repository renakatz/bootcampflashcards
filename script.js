const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

card = document.getElementById("flashcard");
nextButton = document.getElementById("next-btn");
previousButton = document.getElementById("prev-btn");
addCard = document.getElementById("add-card-btn");
newTermInput = document.getElementById("new-term");
newDefinitionInput = document.getElementById("new-definition");

// Start with this function to simply display the card
function displayCard() {
    if(showingTerm){
        document.getElementById("card-content").innerText = flashcards[currentIndex].term;
    } else{
        document.getElementById("card-content").innerText = flashcards[currentIndex].definition;
    }
}

function flipCard() {
    showingTerm = !showingTerm;
    displayCard();
}

function nextCard() {
    showingTerm = true;
    currentIndex++;
    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }
    displayCard();

}

function previousCard() {
    showingTerm = true;
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = flashcards.length - 1;
    }
    displayCard();
}

function newCard(){
    const term = newTermInput.value;
    const definition = newDefinitionInput.value;
    flashcards.push({ term, definition });
    newTermInput.value = "";
    newDefinitionInput.value = "";
}

let colorIndex = 0;
function color(){
    const colors = ["lightblue", "lightyellow", "lightpink", "white"];
    document.getElementById("flashcard").style.backgroundColor = colors[colorIndex];
    colorIndex++;
    if(colorIndex >= colors.length){
        colorIndex = 0;
    }
}

// This line will display the card when the page is refreshed
window.onload = displayCard;

// adding event listeners to the buttons
card.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
previousButton.addEventListener("click", previousCard);
addCard.addEventListener("click", newCard);
colorChange = document.getElementById("color");
colorChange.addEventListener("click", color)
