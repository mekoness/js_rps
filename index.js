const options = ["✊", "✋", "✌️"]
let wins = 0
let losses = 0
let draws = 0
let userChoice = ""
let comChoice = ""
let comChoiceEl = document.getElementById("com-choice")
let userChoiceEl = document.getElementById("user-choice")
let gameTextEl = document.getElementById("game-text")

function comPlay() {
    comChoice = options[ Math.floor( Math.random() * options.length ) ]
    comChoiceEl.textContent = comChoice
}

function userRock() {
    userChoice = "✊"
    userChoiceEl.textContent = userChoice
}

function userPaper() {
    userChoice = "✋"
    userChoiceEl.textContent = userChoice
}

function userScissors() {
    userChoice = "✌️"
    userChoiceEl.textContent = userChoice
}

function startGame() {
    comPlay()
    if (comChoice === userChoice) {
        draws ++
        gameTextEl.textContent = "Draw!"
    } else if (comChoice === "✊" && userChoice === "✋") {
        wins ++
        gameTextEl.textContent = "You win!"
    } else if (comChoice === "✋" && userChoice === "✌️") {
        wins ++
        gameTextEl.textContent = "You win!"
    } else if (comChoice === "✌️" && userChoice === "✊") {
        wins ++
        gameTextEl.textContent = "You win!"
    } else {
        losses ++
        gameTextEl.textContent = "You lose!"
    }
}

function endGame() {
    gameTextEl.textContent = "Wins: " + wins + " Losses: " + losses
    wins = 0
    losses = 0
    draws = 0
    comChoiceEl.textContent = ""
    userChoiceEl.textContent = ""
}