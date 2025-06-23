//POSSIBLE OUTPUT VALUES
const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//playGame();

const answer = document.createElement("div");
answer.setAttribute("style", "text-align: center;");
answer.textContent = "Testing";

function addMessage() {
    const mainContainer = document.querySelector(".base-container");
    mainContainer.appendChild(answer);
}

function playGame() {
    //SCORES VALUES
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        displayActualScore();
    }

    determineWinner();
    
    function playRound(humanChoice, computerChoice){
    
        switch(humanChoice) {
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
                break;
            }
            case paper:{
                if (computerChoice === rock) {
                    console.log("Paper beats Rock, you win this round!");
                    humanScore++;
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
                    humanScore++;
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
        if (humanScore > computerScore) {
            console.log(`You won with a score of ${humanScore}!`);
        }
        else if (humanScore < computerScore) {
            console.log(`Computer won with a score of ${computerScore}!`);
        }
        else if(humanScore === computerScore) {
            console.log("It's a tie!");
        }
    }
    function displayActualScore() {
        console.log(`Player score: ${humanScore} \t Computer score: ${computerScore}`);
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