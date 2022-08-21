function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return (options[Math.floor(Math.random() * options.length)]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
     return "You Lose! Paper beats Rock"
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
     return "You Win! Rock beats Scissors"
    }
    if (playerSelection ==="rock" && computerSelection === "rock") {
     return "Its a tie! Both got Rock"
    }
 
    if (playerSelection === "paper" && computerSelection === "scissors") {
     return "You Lose! Scissors beats Paper"
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
     return "You Win! Paper beats Rock"
    }
    if (playerSelection ==="paper" && computerSelection === "paper") {
     return "Its a tie! Both got Paper"
    }
 
    if (playerSelection === "scissors" && computerSelection === "rock") {
     return "You Lose! Rock beats Scissors"
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
     return "You Win! Scissors beats Paper"
    }
    if (playerSelection ==="scissors" && computerSelection === "scissors") {
     return "Its a tie! Both got Scissors"
    }
   }

// const playerSelection = prompt("Type your choice");
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));



function game(playRound) {
    for (let i = 0; i < 5; i++) {
            if (playRound(playerSelection, computerSelection).slice(0, 8) === "You Win!") {
            console.log("Winner!");
        } else if (playRound(playerSelection, computerSelection).slice(0, 9) === "You Lose!") {
                console.log("Looser!");
            } else {
                console.log("Tie");
            }
        }
     }

     console.log(game(playRound))