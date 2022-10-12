const comChoiceEl = document.getElementById("com-choice");
const userChoiceEl = document.getElementById("user-choice");
const gameTextEl = document.getElementById("game-text");
const playRock = document.getElementById("user-rock")
const playPaper = document.getElementById("user-paper")
const playScissors = document.getElementById("user-scissors")
const endBtn = document.getElementById("end-btn")
const options = ["💎", "📃", "✂️"];
let isPlaying = false;
let wins = 0;
let losses = 0;
let draws = 0;
let userChoice = "";
let comChoice = "";

playRock.addEventListener("click", function(){
    isPlaying = true;
    userChoice = "💎";
    userChoiceEl.textContent = userChoice;
    if (isPlaying === true) {
        comPlay();
        theGame();
    };
});

playPaper.addEventListener("click", function(){
    isPlaying = true;
    userChoice = "📃";
    userChoiceEl.textContent = userChoice;
    if (isPlaying === true) {
        comPlay();
        theGame();
    };
});

playScissors.addEventListener("click", function(){
    isPlaying = true;
    userChoice = "✂️";
    userChoiceEl.textContent = userChoice;
    if (isPlaying === true) {
        comPlay();
        theGame();
    };
});

function comPlay() {
    comChoice = options[ Math.floor( Math.random() * options.length ) ];
    comChoiceEl.textContent = comChoice;
};

function theGame() {
    if (comChoice === userChoice) {
        draws ++;
        gameTextEl.textContent = "Draw!";
    } else if (comChoice === "💎" && userChoice === "📃") {
        wins ++;
        gameTextEl.textContent = "You win!";
    } else if (comChoice === "📃" && userChoice === "✂️") {
        wins ++;
        gameTextEl.textContent = "You win!";
    } else if (comChoice === "✂️" && userChoice === "💎") {
        wins ++;
        gameTextEl.textContent = "You win!";
    } else {
        losses ++;
        gameTextEl.textContent = "You lose!";
    };
};

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