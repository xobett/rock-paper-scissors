console.log("Hello browser");

//SCORES VALUES
let humanScore;
let computerScore;

//POSSIBLE VALUES
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const humnaChoice = getHumanChoice();
const computerChoice = getComputerChoice();

//ROCK BEATS SCISSORS
//PAPER BEATS ROCK
//SCISSORS BEAT PAPER

function playRound(humanChoice, computerChoice){

    switch(humanChoice){
        case rock:{
            if (computerChoice === scissors) {
                console.log("Rock beats Scissors, you win this round!");
                humanScore++;
            }
            else{
                if (computerChoice === paper) {
                console.log("Paper beats Rock, you lost this round!");
                computerScore++;
                }
                else if (computerChoice === rock) {
                console.log("Rock does not beat Rock, it's a tie!");
                }
            }
        }
        case paper:{
            
        }
    }


    if (humanChoice === rock) {
        if (computerChoice === scissors) {
            console.log("Rock beats Scissors, you win this round!");
            humanScore++;
        }
        else {
            if (computerChoice === paper) {
                console.log("Paper beats Rock, you lost this round!");
                computerScore++;
            }
            else if (computerChoice === rock) {
                console.log("Rock does not beat Rock, it's a tie!");
            }
        }
    }
    else if (humanChoice === paper && computerChoice === rock) {
        console.log("Paper beats Rock, you win this round!");
        humanChoice++;
    }
    else if (humanChoice === scissors && computerChoice === paper) {
        console.log("Scissors beat Paper, you win this round");
        humanChoice++;
    }
}

function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3);
    let computerChoice;
    
    switch (randomChoice) {
        case 0: {
            computerChoice = rock;
            break;
        }
        case 1:{
            computerChoice = paper
            break;
        }
        case 2:{
            computerChoice = scissors;
            break;
        }
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}