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
        return 0;
    } else if (pS === "rock") {
        if (cS === "scissors") {
            message.textContent = "You Win! Rock beats Scissors";
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (pScore === 5 || cScore === 5 ) {
            pScore = 0;
            cScore = 0;
        } 

        let cS = getComputerChoice();
        let round = playRound(button.id, cS);
        console.log(round);
            
        if (round === "W") {
            pScore ++;
        } else if (round === "L") {
            cScore ++;
        }
        
        if (pScore === 5) {  
            console.log("Game over! You win!");
        } else if (cScore === 5) {
            console.log("Game over! You lose!");
        }
        console.log(pScore);
    });
});
