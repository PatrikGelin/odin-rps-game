function getComputerChoice() {
    // array of choices
    const choices = ["rock", "paper", "scissors"];
    // randoms a number between 0-2 (elements in the array)
    const random = Math.floor(Math.random() * choices.length);
    // return the corresponding element of that number
    return choices[random];
}

const message = document.querySelector('#message');

function playRound(playerSelection, computerSelection) {
    // shorten the variable names
    let pS = playerSelection;
    let cS = computerSelection;

    // logic to figure out who won
    if ( pS === cS) {
        message.textContent = "Draw!";
    } else if (pS === "rock") {
        if (cS === "scissors") {
            message.textContent = "You Win! Rock beats Scissors";
        } else if (cS === "paper") {
            message.textContent = "You Lose! Paper Beats Rock";
        }
    } else if (pS === "paper") {
        if (cS === "rock") {
            message.textContent = "You Win! Paper beats Rock";
        } else if (cS === "scissors") {
            message.textContent = "You Lose! Scissors Beats Paper";
        }
    } else if (pS === "scissors") {
        if (cS === "paper") {
            message.textContent = "You Win! Scissors beats Paper";
        } else if (cS === "rock") {
            message.textContent = "You Lose! Rock Beats Scissors";
        }
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});


function game() {
    // variables to keep track of the score during a 5 game match
    let pScore = 0;
    let cScore = 0;

    // for loop that will run 5 games
    while (pScore < 5 && cScore < 5) {
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
    
    if (pScore === 5) {  
        console.log("Game over! You win!");
    } else if (cScore === 5) {
        console.log("Game over! You lose!");
    }
}
// run a new game on page refresh
// game();