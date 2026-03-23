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
next = document.getElementById("next-btn");
previous = document.getElementById("previous-btn");
addCard = document.getElementById("add-btn");

// Start with this function to simply display the card
function displayCard() {
    if(showingTerm){
        document.getElementById("card-content").innerText = flashcards[currentIndex].term;
    } else{
        document.getElementById("card-content").innerText = flashcards[currentIndex].definition;
    }
}

function flipCard() {
    if(showingTerm){
        showingTerm = false;
    } else {
        showingTerm = true;
    }
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

// This line will display the card when the page is refreshed
window.onload = displayCard;

// adding event listeners to the buttons
card.addEventListener("click", flipCard);
next.addEventListener("click", nextCard);
previous.addEventListener("click", previousCard);
