const options = ["rock", "paper", "scissors"];

let isPlaying = false;
let wins = 0;
let losses = 0;
let draws = 0;
let userChoice = "";
let comChoice = "";

const comChoiceEl = document.querySelector("#com-choice");
const userChoiceEl = document.querySelector("#user-choice");
const gameTextEl = document.querySelector("#game-text");
const playRock = document.querySelector("#user-rock")
const playPaper = document.querySelector("#user-paper")
const playScissors = document.querySelector("#user-scissors")

// User Choice

function userPlay(option) {
	isPlaying = true;
	userChoice = option;
	userChoiceEl.innerHTML = `<img src="img/${userChoice}.png" id="user-choice">`;
    if (isPlaying) {
        comPlay();
        theGame();
    };
};

playRock.addEventListener("click", () => {
	userPlay("rock");
});

playPaper.addEventListener("click", () => {
	userPlay("paper");
});

playScissors.addEventListener("click", () => {
	userPlay("scissors");
});

// Com Choice

function comPlay() {
    comChoice = options[ Math.floor( Math.random() * options.length ) ];
    comChoiceEl.innerHTML = `<img src="img/${comChoice}.png" id="com-choice">`;
};

// Game Function

function theGame() {
    if (comChoice === userChoice) {
        draws ++;
        gameTextEl.textContent = "Draw!";
    } else if (comChoice === "rock" && userChoice === "paper") {
        wins ++;
        gameTextEl.textContent = "You win!";
    } else if (comChoice === "paper" && userChoice === "scissors") {
        wins ++;
        gameTextEl.textContent = "You win!";
    } else if (comChoice === "scissors" && userChoice === "rock") {
        wins ++;
        gameTextEl.textContent = "You win!";
    } else {
        losses ++;
        gameTextEl.textContent = "You lose!";
    };
};

// End Game

const endBtn = document.getElementById("end-btn")

endBtn.addEventListener("click", function(){
    isPlaying = false;
    gameTextEl.textContent = `Wins: ${wins} Losses: ${losses}`;
    wins = 0;
    losses = 0;
    draws = 0;
    userChoice = "";
    comChoice = "";
    comChoiceEl.textContent = "";
    userChoiceEl.textContent = "";
})