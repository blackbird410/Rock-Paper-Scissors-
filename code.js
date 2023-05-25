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

function playRound(playerSelection, computerSelection) {
    let pS = playerSelection.slice(0, 1).toUpperCase() +playerSelection.slice(1).toLowerCase();
    let cS = computerSelection.slice(0, 1).toUpperCase() +computerSelection.slice(1).toLowerCase();

    if (pS === cS) {
        return "It's a tie!";
    } 

    switch (pS) {
        case "Rock":
            if (cS === "Paper") {
                return "You Lose! Paper beats Rock";        
            } else {
                return "You Won! Rock beats Scissors";
            }
            break;
        case "Paper":
            if (cS === "Scissors") {
                return "You Lose! Scissors beats Paper";        
            } else {
                return "You Won! Paper beats Rock";
            }
            break;
        case "Scissors":
            if (cS === "Rock") {
                return "You Lose! Rock beats Scissors";
            } else {
                return "You Won! Scissors beats Paper";
            }
            break;
        default:
            return "Wrong input!";
    }
}

function game() {
    let userInput;
    let result;
    let winCount = 0;
    let lossCount = 0;
    let resultText;

    for (let i=0; i < 5; i++) {
        userInput = prompt("Rock ? Paper ? Or Scissors ?");
        result = playRound(userInput, getComputerChoice());

        console.log(result);
        alert(result);

        if (result.slice(0, 7) === "You Won") {
            winCount++;
        }

        if (result.slice(0, 8) === "You Lose") {
            lossCount++;
        }
    }

    resultText = `Result : You => ${winCount} | Computer => ${lossCount}`;
    console.log(resultText);
    alert(resultText);
    
    if (winCount > lossCount) {
        console.log("You Won the game");
        alert("YOU WON !!! CONGRATULATIONS!!!");
    } else if (winCount < lossCount) {
        console.log("You Lost the game");
        alert("YOU LOST! Good luck next time!");
    } else {
        console.log("It is a tie, no one wins!");
        alert("It's a TIE!!! Good luck next time.")
    }
}

window.onload=function(){
    const play = document.querySelector(".playButton");
    const help = document.querySelector(".helper");

    play.addEventListener('click', (event) => { 
        game();
    });

    help.addEventListener('click', (event) => {
        alert("Rock paper scissors is an intransitive hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are \"rock\" (a closed fist), \"paper\" (a flat hand), and \"scissors\" (a fist with the index finger and middle finger extended, forming a V).")
        alert("A simultaneous, zero-sum game, it has three possible outcomes: a draw, a win or a loss. A player who decides to play rock will beat another player who has chosen scissors (rock crushes scissors or breaks scissors or sometimes blunts scissors), but will lose to one who has played paper (paper covers rock); a play of paper will lose to a play of scissors (scissors cuts paper). If both players choose the same shape, the game is tied and is usually immediately replayed to break the tie.");
    });
}

