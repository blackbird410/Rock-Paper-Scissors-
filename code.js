function getComputerChoice() {
    /**
     * This function generates a random answer based on three options and 
     * return it as a string value. 
     */

    let n = Math.floor(Math.random() * 3) +1;
    
    if (n === 1) {
        return "Rock";
    } else if (n === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let won = 0;
let lost = 0;

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.slice(0, 1).toUpperCase() +playerSelection.slice(1).toLowerCase();
    let cS = computerSelection.slice(0, 1).toUpperCase() +computerSelection.slice(1).toLowerCase();    

    let final = "";

    if (pS === cS) {
        final = "It's a tie!";
    } 

    switch (pS) {
        case "Rock":
            if (cS === "Paper") {
                final =  "You Lost! Paper beats Rock";        
            } else {
                final = "You Won! Rock beats Scissors";
            }
            break;
        case "Paper":
            if (cS === "Scissors") {
                final = "You Lost! Scissors beats Paper";        
            } else {
                final = "You Won! Paper beats Rock";
            }
            break;
        case "Scissors":
            if (cS === "Rock") {
                final = "You Lost! Rock beats Scissors";
            } else {
                final = "You Won! Scissors beats Paper";
            }
            break;
        default:
            return "Wrong input!";
    }

    if (/won/i.test(final)) won += 1;  
    if (/lost/i.test(final)) lost += 1;
    if (won === 5) {
        resetGame();
        return "Congrats! You won the game.";
    }
    if (lost === 5) {
        resetGame();
        return "Sorry ! You lost the game.";
    }
    return final;
}

function play(sign) {
    let res = playRound(sign, getComputerChoice());
    let status = "\r\n\n" +`HUMAN : ${won}\tCOMPUTER : ${lost}`;  
    if (/Congrats/.test(res) || /Sorry/i.test(res)) return res;
    return res + status;
}

function resetGame() {
    won = 0;
    lost = 0;
    result.textContent = "";
}

const help = document.querySelector(".helper");
help.addEventListener('click', (event) => {
    alert("Rock paper scissors is an intransitive hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are \"rock\" (a closed fist), \"paper\" (a flat hand), and \"scissors\" (a fist with the index finger and middle finger extended, forming a V).")
    alert("A simultaneous, zero-sum game, it has three possible outcomes: a draw, a win or a loss. A player who decides to play rock will beat another player who has chosen scissors (rock crushes scissors or breaks scissors or sometimes blunts scissors), but will lose to one who has played paper (paper covers rock); a play of paper will lose to a play of scissors (scissors cuts paper). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie.");
});

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const main = document.querySelector('.main');
const result = document.querySelector('.result');
result.setAttribute('style', 'white-space: pre;');

rock.addEventListener('click', (event) => {
    result.textContent = play("Rock");
});

paper.addEventListener('click', (event) => {
    result.textContent = play("Paper");
});

scissors.addEventListener('click', (event) => {
    result.textContent = play("Scissors");
});

const newGame = document.querySelector('.newGame');
newGame.addEventListener('click', resetGame);
