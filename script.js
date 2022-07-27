function getComputerChoice() {
    let compBet = Math.floor(Math.random()*3);
    switch (compBet) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'Computer did not abide by the rules.'
    }
}

let playerStatus = 0;
let computerStatus = 0;
let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerStatus = 0;
    computerStatus = 0;
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        console.log(`Your input is ${playerSelection}`);
        console.log(`The computer's input is ${computerSelection}`);
    } else {
        return console.log('Please input an acceptable choice.')
    }

    switch (true) {
        case playerSelection === 'rock' && computerSelection === 'rock':
            playerStatus = 0;
            computerStatus = 0;
            return console.log("It's a draw. Try again!");
        case playerSelection === 'rock' && computerSelection === 'paper':
            playerStatus = 0;
            computerStatus = 1;
            computerWins++;
            return console.log("You're the loser this round! Paper beats Rock!");
        case playerSelection === 'rock' && computerSelection === 'scissors':
            playerStatus = 1;
            computerStatus = 0;
            playerWins++;
            return console.log("You're the winner this round! Rock beats Scissors!"); 
        case playerSelection === 'paper' && computerSelection === 'rock':
            playerStatus = 1;
            computerStatus = 0;
            playerWins++;
            return console.log("You're the winner this round! Paper beats Rock!");
        case playerSelection === 'paper' && computerSelection === 'paper':
            playerStatus = 0;
            computerStatus = 0;
            return console.log("It's a draw. Try again!");
        case playerSelection === 'paper' && computerSelection === 'scissors':
            playerStatus = 0;
            computerStatus = 1;
            computerWins++;
            return console.log("You're the loser this round! Scissors beats Paper!");
        case playerSelection === 'scissors' && computerSelection === 'rock':
            playerStatus = 0;
            computerStatus = 1;
            computerWins++;
            return console.log("You're the loser this round! Rock beats Scissors!");
        case playerSelection === 'scissors' && computerSelection === 'paper':
            playerStatus = 1;
            computerStatus = 0;
            playerWins++;
            return console.log("You're the winner this round! Scissors beats Paper!");
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            playerStatus = 0;
            computerStatus = 0;
            return console.log("It's a draw. Try again!");
        default:
            return console.log("Match error.");
    }
}

function game() {
    do {
        playRound(prompt("Choose your your hand: "), getComputerChoice());
        console.log(`Overall Tally: Player - ${playerWins}, Computer - ${computerWins}`);
        if (playerWins === 5) {
            return console.log("You won this game. Congratulations!");
        }
        if (computerWins === 5) {
            return console.log("You lost this game. Try again next time!");
        }
    } while (playerWins < 5 || computerWins < 5);
}

game();