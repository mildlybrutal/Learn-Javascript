let firstCard = 1;
let secondCard = 20;
let cards = [firstCard, secondCard];

let hasBlackJack = false;
let sum = firstCard + secondCard;
let isAlive = true;
let startBtn = document.getElementById("start-btn");
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let cardsEl = document.getElementById("cards-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } 
    else {
        message = "You're out of the game!";
    }

    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
    messageEl.textContent = message;
}
function newCard() {
    messageEl.textContent = "Drawing a new card from the deck!";
    let newCard = 5;
    sum += newCard;
    cards.push(newCard);
    startGame();
}
