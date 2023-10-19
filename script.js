function getComputerChoice() {
    // array of choices
    const choices = ["rock", "paper", "scissors"];
    // randoms a number between 0-2 (elements in the array)
    const random = Math.floor(Math.random() * choices.length);
    // return the corresponding element of that number
    return choices[random];
}

// selectors for divs in index.html
const message = document.querySelector('#message');
const score = document.querySelector('#score');


function playRound(playerSelection, computerSelection) {
    // shorten the variable names
    let pS = playerSelection;
    let cS = computerSelection;

    // logic to figure out who won
    if ( pS === cS) {
        message.textContent = "Draw!";
        return 0;
    } else if (pS === "rock") {
        if (cS === "scissors") {
            message.textContent = "You Win! Rock beats Scissors";
            // return values used to check winner for scoring
            return "W";
        } else if (cS === "paper") {
            message.textContent = "You Lose! Paper Beats Rock";
            return "L";
        }
    } else if (pS === "paper") {
        if (cS === "rock") {
            message.textContent = "You Win! Paper beats Rock";
            return "W";
        } else if (cS === "scissors") {
            message.textContent = "You Lose! Scissors Beats Paper";
            return "L";
        }
    } else if (pS === "scissors") {
        if (cS === "paper") {
            message.textContent = "You Win! Scissors beats Paper";
            return "W";
        } else if (cS === "rock") {
            message.textContent = "You Lose! Rock Beats Scissors";
            return "L";
        }
    }
}

// variables to keep track of the score
let pScore = 0;
let cScore = 0;

// main "loop" for the game
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // if the game is over reset score
        if (pScore === 5 || cScore === 5 ) {
            pScore = 0;
            cScore = 0;
        } 

        let cS = getComputerChoice();
        let round = playRound(button.id, cS);
            
        // check for winner of round and update score
        if (round === "W") {
            pScore ++;
        } else if (round === "L") {
            cScore ++;
        }
        
        score.textContent = `Player ${pScore} Computer ${cScore}`

        // check if game is over
        if (pScore === 5) {  
            score.textContent = "Game over! You win!";
        } else if (cScore === 5) {
            score.textContent = "Game over! You lose!";
        }
    });
});
