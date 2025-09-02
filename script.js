
// #region GAME VALUES

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let gameOver = false;

// #endregion GAME VALUES

// #region PLAYABLE BUTTONS

const buttons = document.querySelectorAll(".button");

// #endregion PLAYABLE BUTTONS

// #region CONTESTANTS STATS

let playerChoice;
let playerScore = 0;

let cpuChoice;
let cpuScore = 0;

// #endregion CONTESTANTS STATS

// #region CONTESTANTS UI ELEMENTS

const playerChoiceTxt = document.querySelector(".player-choice");
const cpuChoiceTxt = document.querySelector(".cpu-choice");

const playerScoreTxt = document.querySelector(".player-score");
const cpuScoreTxt = document.querySelector(".cpu-score");

const roundOutcomeTxt = document.querySelector(".round-outcome");

// #endregion CONTESTANTS UI ELEMENTS

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", (e) => playRound(e));
}

function playRound(e){

    if (gameOver) return;

    playerChoice = getPlayerChoice(e);
    cpuChoice = getCpuChoice();

    displayContestantsChoices();

    let outcomeResult;
    switch(playerChoice) {
        case rock:{
            if (cpuChoice === scissors) {
                outcomeResult = "Rock beats Scissors, you win this round!";
                playerScore++;
            }
            else{
                if (cpuChoice === paper) {
                outcomeResult = "Paper beats Rock, you lost this round!";
                cpuScore++;
                }
                else if (cpuChoice === rock) {
                outcomeResult = "Rock does not beat Rock, it's a tie!";
                }
            }
            break;
        }
        case paper:{
            if (cpuChoice === rock) {
                outcomeResult = "Paper beats Rock, you win this round!";
                playerScore++;
            }
            else {
                if (cpuChoice === scissors) {
                    outcomeResult = "Scissors beat Paper, you lost this round!";
                    cpuScore++;
                }
                else if (cpuChoice === paper) {
                    outcomeResult = "Paper does not beat Paper, it's a tie!";
                }
            }
            break;
        }
        case scissors:{
            if (cpuChoice === paper) {
                outcomeResult = "Scissors beat paper, you win this round!";
                playerScore++;
            }
            else {
                if (cpuChoice === rock) {
                    outcomeResult = "Rock beats Scissors, you lost this round!";
                    cpuScore++;
                }
                else if (cpuChoice === scissors) {
                    outcomeResult = "Scissors does not beat Scissors, it's a tie!";
                } 
            }
            break;
        }
    }

    displayActualScore();
    displayRoundOutcome(outcomeResult);
}

// #region UI FUNCS

function displayActualScore() {
    playerScoreTxt.textContent = playerScore.toString();
    cpuScoreTxt.textContent = cpuScore.toString();
}

function displayContestantsChoices() {
    playerChoiceTxt.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    cpuChoiceTxt.textContent = `CPU: ${cpuChoice.toUpperCase()}`;
}

function displayRoundOutcome(txt){
    
    if (playerScore >= 5 || cpuScore >= 5) {
        determineWinner();
        return;
    }
    
    roundOutcomeTxt.textContent = txt;
}

function determineWinner() {

    let gameResult;
    if (playerScore > cpuScore) {
        gameResult = `You won with a score of ${playerScore}!`;
    }
    else if (playerScore < cpuScore) {
        gameResult = `Computer won with a score of ${cpuScore}!`;
    }
    else if(playerScore === cpuScore) {
        gameResult = "It's a tie!";
    }

    displayRoundOutcome(gameResult);
    gameOver = true;
}

// #endregion UI FUNCS

// #region GAME FUNCS

function getCpuChoice(){
    const randomChoice = Math.floor(Math.random() * 3);
    let choice;
    
    switch (randomChoice) {
        case 0: {
            choice = rock;
            break;
        }
        case 1:{
            choice = paper
            break;
        }
        case 2:{
            choice = scissors;
            break;
        }
    }

    return choice;
}

function getPlayerChoice(e){
    const optionType = e.target.getAttribute("class");
    let choice;

    switch (optionType){
        case "button rock-button":{
            choice = rock;
            break;
        }
        case "button paper-button":{
            choice = paper;
            break;
        }
        case "button scissors-button":{
            choice = scissors;
            break;
        }
    }

    return choice;
}

// #endregion GAME FUNCS