let humanScore = 0;
let computerScore = 0;
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const humanScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const message_p = document.getElementById('message');


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


function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
      message_p.textContent = "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      humanScore_span.innerHTML = humanScore;
      message_p.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
    } else {
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      message_p.textContent = "You lose! " + computerChoice + " beats " + humanChoice + "!";

    }

  }

function getHumanChoise() {
    rock_div.addEventListener("click", function() {
        playGame('rock');
        
  })
  
    paper_div.addEventListener("click", function() {
        playGame('paper');
  })
  
    scissors_div.addEventListener("click", function() {
        playGame('scissors');
  })
  
}

getHumanChoise();


