// const imgRock = document.getElementById("img-rock")
// const imgPaper = document.getElementById("img-paper")
// const imgScissors = document.getElementById("img-scissors")
// const options = [imgRock, imgPaper, imgScissors]
const options = ["💎", "📃", "✂️"]
let isPlaying = false
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
    isPlaying = true
    userChoice = "💎"
    userChoiceEl.textContent = userChoice
    if (isPlaying === true) {
        comPlay()
        theGame()
    }
}

function userPaper() {
    isPlaying = true
    userChoice = "📃"
    userChoiceEl.textContent = userChoice
    if (isPlaying === true) {
        comPlay()
        theGame()
    }
}

function userScissors() {
    isPlaying = true
    userChoice = "✂️"
    userChoiceEl.textContent = userChoice
    if (isPlaying === true) {
        comPlay()
        theGame()
    }
}

function theGame() {
    if (comChoice === userChoice) {
        draws ++
        gameTextEl.textContent = "Draw!"
    } else if (comChoice === "💎" && userChoice === "📃") {
        wins ++
        gameTextEl.textContent = "You win!"
    } else if (comChoice === "📃" && userChoice === "✂️") {
        wins ++
        gameTextEl.textContent = "You win!"
    } else if (comChoice === "✂️" && userChoice === "💎") {
        wins ++
        gameTextEl.textContent = "You win!"
    } else {
        losses ++
        gameTextEl.textContent = "You lose!"
    }
}

function endGame() {
    isPlaying = false
    gameTextEl.textContent = "Wins: " + wins + " Losses: " + losses
    wins = 0
    losses = 0
    draws = 0
    userChoice = ""
    comChoice = ""
    comChoiceEl.textContent = ""
    userChoiceEl.textContent = ""
}