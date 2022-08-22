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

   let win = 0;
   let lose = 0;
   let tie = 0;
   


   function game() {
    

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Type your choice")
        const computerSelection = getComputerChoice();
        const round = playRound(playerSelection, computerSelection)
        alert("Computer got " + computerSelection)
        console.log(round);

        if (round[4] === "W") {
            win += 1; 
         } else if (round[4] === "L") {
            lose += 1;
         } else {
            tie += 1;
         }
     }

     if (win > lose) {
        console.log("You have won the match!!");
        alert("You have won the match!!")
     } else if (lose > win) {
        console.log("Too bad! You have lost the match");
        alert("Too bad! You have lost the match")
     }
        else {
            console.log("You have tied the match!")
            alert("You have tied the match!")
    }
}
     
 
  
game();