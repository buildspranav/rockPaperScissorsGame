let playerScore=0;
let computerScore=0;
let playerChoice;

function computerSelector() {
  let computerNum = Math.floor(Math.random()*3);
  let computerChoice;
  if( computerNum === 0){
     computerChoice = 'rock';
  } else if (computerNum === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissor';
  }
}
function game() {
  if(playerChoice === computerChoice){
  } else if (playerChoice === 'rock' && computerChoice === 'paper'){
    computerScore++;
  } else if(playerChoice === 'rock' && computerChoice === 'scissor'){
    playerScore++;
  } else if(playerChoice === 'paper' && computerChoice === 'rock'){
    playerScore++;
  } else if(playerChoice === 'paper' && computerChoice === 'scissor'){
    computerScore++;
  } else if(playerChoice === 'scissor' && computerChoice === 'paper'){
    playerScore++;
  }
  let compScore = document.getElementById("result")
  compScore.innerHTML = "C"
}
