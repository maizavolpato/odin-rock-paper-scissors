let humanScore = 0;
let computerScore = 0;


//function gate computer choice.
function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0){
        computer = "rock";
    } else if (computer === 1){
        computer = "paper";
    } else {
        computer = "scissors";
    }
    return computer;
}

//a function that ask a user to chose rock, paper or sissor
function getHumanChoice (){
    const userInput = prompt("Enter with your choise (rock, paper or sissors)").toLowerCase();
    if (["rock", "paper", "scissors"].includes(userInput)){
        return userInput;
    } else {
        console.log(prompt("Invalid choise, please try again! Chose rock, paper or sissors."));
        return getHumanChoice();
    }
}

function playGame(){
        function playRound(humanChoice, computerChoice) {
            if (humanChoice === computerChoice){
                return "It's a tie!";
        }
        if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                computerScore++;
                return "You lose, Paper beats Rock!";

            }else {
                humanScore++;
                return "You won!"
            }
        }
        if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                computerScore++;
                return "You lose! Scissors beats Paper!"
            } else {
                humanScore++;
                return "You won!"
            }
        }
        if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                computerScore++;
                return "You lose! Rock beats scissors!"
            } else {
                humanScore++;
                return "You won"
            }
        }
    
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    console.log(`You threw: ${humanSelection}`);
    console.log(`The computer threw: ${computerSelection}`);
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    
    checkWinner();
}


playGame()
playGame()
playGame()
playGame()
playGame()


function checkWinner(){ 
    if (humanScore > computerScore){
    return "You won this game!"
    } else if (humanScore === computerScore) {
    return "Sorry, we were tie in this game!"
    } else {
    return "Sorry, computer won this game!"
    }
}
