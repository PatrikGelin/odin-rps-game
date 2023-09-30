function getComputerChoice() {
    // array of choices
    const choices = ["rock", "paper", "scissors"];
    // randoms a number between 0-2 (elements in the array)
    const random = Math.floor(Math.random() * choices.length);
    // return the corresponding element of that number
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    // shorten the variable names and make sure that player input is lowercase
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection;

    // logic to figure out who won
    if ( pS === cS) {
        return "Draw!"
    } else if (pS === "rock") {
        if (cS === "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (cS === "paper") {
            return "You Lose! Paper Beats Rock";
        }
    } else if (pS === "paper") {
        if (cS === "rock") {
            return "You Win! Paper beats Rock";
        } else if (cS === "scissors") {
            return "You Lose! Scissors Beats Paper";
        }
    } else if (pS === "scissors") {
        if (cS === "paper") {
            return "You Win! Scissors beats Paper";
        } else if (cS === "rock") {
            return "You Lose! Rock Beats Scissors";
        }
    }
}

function game() {
    // variables to keep track of the score during a 5 game match
    let pScore = 0;
    let cScore = 0;

    // for loop that will run 5 games
    for (let i=0; i<5; i++) {
        // prompt the player for input
        let pS = prompt("Chose your weapon! Rock, Paper or Scissors");
        // get computers choice 
        let cS = getComputerChoice();
        // play the round 
        let round = playRound(pS, cS);
        // check the 5th letter in the return value
        let winner = round.slice(4, 5);
        // if the 5th letter is a W then its a win for the player, add 1 to player score
        if (winner === "W") {
            pScore ++;
        // if its a L then add 1 to computer score 
        } else if (winner === "L") {
            cScore ++;
        } // else dont add score bc its a tie

        console.log(round);
    }
    // after the 5 rounds check scoring and log the winner
    if (pScore === cScore) {
        console.log("Game over! its a Draw!");
    } else if (pScore > cScore) {  
        console.log("Game over! You win!");
    } else {
        console.log("Game over! You lose!");
    }
}
// run a new game on page refresh
game();