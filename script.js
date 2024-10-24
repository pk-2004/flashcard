const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array
let lenghtOfArr = flashcards.length
// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
        const cardContent = document.getElementById("card-content");
        if (showingTerm) {
            cardContent.textContent = flashcards[currentIndex].term;
            showingTerm = false;
        } else {
            cardContent.textContent = flashcards[currentIndex].definition;
            showingTerm = true;
        }
    }

    function nextcard(){
        if (currentIndex == lenghtOfArr){
            currentIndex = 0
        }else{
            currentIndex = (currentIndex + 1);
        }
        showingTerm = true
        displayCard()
    }

    function prevcard(){
        const cardContent = document.getElementById("card-content");
        if (currentIndex == 0){
            currentIndex = lenghtOfArr-1
            showingTerm = true
        }else{
            currentIndex = currentIndex -1
            showingTerm = true
        }
        displayCard()
    }

    function addcard(){
        let new_term = document.getElementById('new-term').value
        let new_definition =  document.getElementById('new-definition').value
        flashcards.push({
            term: new_term,
            definition: new_definition
        })
        displayCard();;
        
    }
// The rest of the code you will write is apart of event listeners

document.getElementById('card-content').addEventListener('click', displayCard)
document.getElementById('next-btn').addEventListener('click', nextcard)
document.getElementById('prev-btn').addEventListener('click', prevcard)
document.getElementById('add-card-btn').addEventListener('click',addcard)

// This line will display the card when the page is refreshed
window.onload = displayCard;