const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    }
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    }

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Both choices are rock. Its a tie"
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    }
    
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    }

    if (playerSelection === "paper" && computerSelection === "paper") {
        return "Both choices are paper. Its a tie"
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    }
    
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    }

    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Both choices are Scissors. Its a tie"
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));