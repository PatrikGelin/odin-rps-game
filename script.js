function getComputerChoice() {
    // array of choices
    const choices = ["rock", "paper", "scissors"];
    // randoms a number between 0-2 (elements in the array)
    const random = Math.floor(Math.random() * choices.length);
    // return the corresponding element of that number
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.toLowerCase();
    let cS = computerSelection;

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

    let pScore = 0;
    let cScore = 0;

    for (let i=0; i<5; i++) {
        let pS = prompt("Chose your weapon! Rock, Paper or Scissors");
        let cS = getComputerChoice();
        let round = playRound(pS, cS);
        let winner = round.slice(4, 5);

        if (winner === "W") {
            pScore ++;
        } else if (winner === "L") {
            cScore ++;
        }
        console.log(round);
    }

    if (pScore === cScore) {
        console.log("Game over! its a Draw!");
    } else if (pScore > cScore) {  
        console.log("Game over! You win!");
    } else {
        console.log("Game over! You lose!");
    }
}

game();