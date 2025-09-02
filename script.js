
// #region GAME VALUES

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// #endregion GAME VALUES

// #region PLAYABLE BUTTONS

const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", getPlayerChoice);
}

// #endregion PLAYABLE BUTTONS

// #region CONTESTANTS STATS

let playerChoice, playerScore;

let cpuChoice, cpuScore;

// #endregion CONTESTANTS STATS

// #region CONTESTANTS UI ELEMENTS

const playerChoiceTxt = document.querySelector(".player-choice");
const cpuChoiceTxt = document.querySelector(".cpu-choice");

const playerScoreTxt = document.querySelector(".player-score");
const cpuScoreTxt = document.querySelector(".cpu-score");

// #endregion CONTESTANTS UI ELEMENTS

function playRound(e){

    playerChoice = getPlayerChoice(e);
    cpuChoice = getCpuChoice();

    displayContestantsChoices();

    switch(playerChoice) {
        case rock:{
            if (computerChoice === scissors) {
                console.log("Rock beats Scissors, you win this round!");
                playerScore++;
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
            break;
        }
        case paper:{
            if (computerChoice === rock) {
                console.log("Paper beats Rock, you win this round!");
                playerScore++;
            }
            else {
                if (computerChoice === scissors) {
                    console.log("Scissors beat Paper, you lost this round!");
                    computerScore++;
                }
                else if (computerChoice === paper) {
                    console.log("Paper does not beat Paper, it's a tie!");
                }
            }
            break;
        }
        case scissors:{
            if (computerChoice === paper) {
                console.log("Scissors beat paper, you win this round!");
                playerScore++;
            }
            else {
                if (computerChoice === rock) {
                    console.log("Rock beats Scissors, you lost this round!");
                    computerScore++;
                }
                else if (computerChoice === scissors) {
                    console.log("Scissors does not beat Scissors, it's a tie!");
                } 
            }
            break;
        }
    }
}

function determineWinner() {
    if (playerScore > computerScore) {
        console.log(`You won with a score of ${playerScore}!`);
    }
    else if (playerScore < computerScore) {
        console.log(`Computer won with a score of ${computerScore}!`);
    }
    else if(playerScore === computerScore) {
        console.log("It's a tie!");
    }
}

function displayActualScore() {
    playerScoreTxt.textContent = playerScore.toString();
    cpuScoreTxt.textContent = cpuScore.toString();
}

function displayContestantsChoices() {
    playerChoiceTxt.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    playerChoiceTxt.textContent = `CPU: ${cpuChoice.toUpperCase()}`;
}

function getCpuChoice(){
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

function getPlayerChoice(e){
    const optionType = e.target.getAttribute("class");

    switch (optionType){
        case "button rock-button":{
            playerChoice = rock;
            break;
        }
        case "button paper-button":{
            playerChoice = paper;
            break;
        }
        case "button scissors-button":{
            playerChoice = scissors;
            break;
        }
    }
}