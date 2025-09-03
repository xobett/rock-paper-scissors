
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
                roundOutcomeTxt.setAttribute("class", "round-won");
                outcomeResult = "Rock beats Scissors, you win this round!";
                playerScore++;
            }
            else{
                if (cpuChoice === paper) {
                roundOutcomeTxt.setAttribute("class", "round-lost");
                outcomeResult = "Paper beats Rock, you lost this round!";
                cpuScore++;
                }
                else if (cpuChoice === rock) {
                roundOutcomeTxt.setAttribute("class", "round-tie");
                outcomeResult = "Rock does not beat Rock, it's a tie!";
                }
            }
            break;
        }
        case paper:{
            if (cpuChoice === rock) {
                roundOutcomeTxt.setAttribute("class", "round-won");
                outcomeResult = "Paper beats Rock, you win this round!";
                playerScore++;
            }
            else {
                if (cpuChoice === scissors) {
                    roundOutcomeTxt.setAttribute("class", "round-lost");
                    outcomeResult = "Scissors beat Paper, you lost this round!";
                    cpuScore++;
                }
                else if (cpuChoice === paper) {
                    roundOutcomeTxt.setAttribute("class", "round-tie");
                    outcomeResult = "Paper does not beat Paper, it's a tie!";
                }
            }
            break;
        }
        case scissors:{
            if (cpuChoice === paper) {
                roundOutcomeTxt.setAttribute("class", "round-won");
                outcomeResult = "Scissors beat paper, you win this round!";
                playerScore++;
            }
            else {
                if (cpuChoice === rock) {
                    roundOutcomeTxt.setAttribute("class", "round-lost");
                    outcomeResult = "Rock beats Scissors, you lost this round!";
                    cpuScore++;
                }
                else if (cpuChoice === scissors) {
                    roundOutcomeTxt.setAttribute("class", "round-tie");
                    outcomeResult = "Scissors does not beat Scissors, it's a tie!";
                } 
            }
            break;
        }
    }

    displayActualScore();

    if (playerScore >= 5 || cpuScore >= 5){
        onGameEndDetermineWinner();
    }
    else {
        displayRoundOutcome(outcomeResult);
    }
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
    roundOutcomeTxt.textContent = txt;
}

function onGameEndDetermineWinner() {

    let gameResult;
    if (playerScore > cpuScore) {
        roundOutcomeTxt.setAttribute("class", "round-won");
        gameResult = `You won with a score of ${playerScore}!`;
    }
    else if (playerScore < cpuScore) {
        roundOutcomeTxt.setAttribute("class", "round-lost");
        gameResult = `Computer won with a score of ${cpuScore}!`;
    }
    else if(playerScore === cpuScore) {
        roundOutcomeTxt.setAttribute("class", "round-tie");
        gameResult = "It's a tie!";
    }

    roundOutcomeTxt.textContent = gameResult + " Reload the page to play again!";
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