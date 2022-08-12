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

let playerWins = 0;
let computerWins = 0;
const resetScore = () => {
    div.textContent = "";
    return game();
}

function playRound(playerSelection, computerSelection = getComputerChoice) {
    if (playerWins > 5 || computerWins > 5) {
        div.innerHTML += `The game is already over!`
        div.innerHTML += "<br>"
        div.textContent = "";
        location.reload();
    }
    switch (true) {
        case playerSelection === 'rock' && computerSelection === 'rock':
            div.innerHTML += "It's a draw. Try again!";
            div.innerHTML += "<br>";
            return console.log("It's a draw. Try again!");
        case playerSelection === 'rock' && computerSelection === 'paper':
            computerWins++;
            div.innerHTML += "You're the loser this round! Paper beats Rock!";
            div.innerHTML += "<br>";
            return console.log("You're the loser this round! Paper beats Rock!");
        case playerSelection === 'rock' && computerSelection === 'scissors':
            playerWins++;
            div.innerHTML += "You're the winner this round! Rock beats Scissors!";
            div.innerHTML += "<br>";
            return console.log("You're the winner this round! Rock beats Scissors!"); 
        case playerSelection === 'paper' && computerSelection === 'rock':
            playerWins++;
            div.innerHTML += "You're the winner this round! Paper beats Rock!";
            div.innerHTML += "<br>";
            return console.log("You're the winner this round! Paper beats Rock!");
        case playerSelection === 'paper' && computerSelection === 'paper':
            div.innerHTML += "It's a draw. Try again!";
            div.innerHTML += "<br>";
            return console.log("It's a draw. Try again!");
        case playerSelection === 'paper' && computerSelection === 'scissors':
            computerWins++;
            div.innerHTML += "You're the loser this round! Scissors beats Paper!";
            div.innerHTML += "<br>";
            return console.log("You're the loser this round! Scissors beats Paper!");
        case playerSelection === 'scissors' && computerSelection === 'rock':
            computerWins++;
            div.innerHTML += "You're the loser this round! Rock beats Scissors!";
            div.innerHTML += "<br>";
            return console.log("You're the loser this round! Rock beats Scissors!");
        case playerSelection === 'scissors' && computerSelection === 'paper':
            playerWins++;
            div.innerHTML += "You're the winner this round! Scissors beats Paper!";
            div.innerHTML += "<br>";
            return console.log("You're the winner this round! Scissors beats Paper!");
        case playerSelection === 'scissors' && computerSelection === 'scissors':
            div.innerHTML += "It's a draw. Try again!";
            div.innerHTML += "<br>";
            return console.log("It's a draw. Try again!");
        default:
            return console.log("Match error.");
    }
}

const container = document.querySelector('.container');

const btnR = document.createElement('button');
btnR.classList.add('rock');
btnR.textContent = 'Rock';
container.appendChild(btnR);

const btnP = document.createElement('button');
btnP.classList.add('paper');
btnP.textContent = 'Paper';
container.appendChild(btnP);

const btnS = document.createElement('button');
btnS.classList.add('scissors');
btnS.textContent = 'Scissors';
container.appendChild(btnS);

const div = document.createElement('div');
div.classList.add('display');
container.appendChild(div);

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', e => {
            console.log(`You chose ${e.target.className}.`);
            div.innerHTML += `You chose ${e.target.className}.`;
            div.innerHTML += "<br>";
            playRound(e.target.className, getComputerChoice());
            console.log(`Overall Tally: Player - ${playerWins}, Computer - ${computerWins}`);
            div.innerHTML += `Overall Tally: Player - ${playerWins}, Computer - ${computerWins}`;
            div.innerHTML += "<br>";
            if (playerWins === 5) {
                console.log("You won this game. Congratulations!");
                div.innerHTML += "You won this game. Congratulations!";
                div.innerHTML += "<br>";
                div.innerHTML += "The game log will reset in 3 seconds.";
                return setTimeout(resetScore, 3000);
            }
            if (computerWins === 5) {
                console.log("You lost this game. Try again next time!");
                div.innerHTML += "You lost this game. Try again next time!";
                div.innerHTML += "<br>";
                div.innerHTML += "The game log will reset in 3 seconds.";
                return setTimeout(resetScore, 3000);

            }
        })
    })
}

game();