let playerScore=0;
let computerScore=0;
let playerChoice;
let computerChoice;
let youWon;

function result() {
  if (youWon === true) { document.getElementById("result").innerHTML = `You Won! ${playerChoice} beats ${computerChoice}`; }
  else if (youWon === false) {document.getElementById("result").innerHTML = `You lost! ${computerChoice} beats ${playerChoice}`;}
}

function computerSelector() {
  let computerNum = Math.floor(Math.random()*3); //Math.random() selects no. bw 0 to 1, and Math.floor removes decimal places
  if( computerNum === 0){
     computerChoice = 'rock';
  } else if (computerNum === 1) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissor';
  }
}

function game() {
  computerSelector();
  if(playerChoice === computerChoice){
    document.getElementById("result").innerHTML = `Game Drawn! Computer Choice ${computerChoice} and Your choice ${playerChoice} is same`;
  } else if (playerChoice === 'rock' && computerChoice === 'paper'){
    computerScore++;
    youWon = false;
  } else if(playerChoice === 'rock' && computerChoice === 'scissor'){
    playerScore++;
    youWon = true;
  } else if(playerChoice === 'paper' && computerChoice === 'rock'){
    playerScore++;
    youWon = true;
  } else if(playerChoice === 'paper' && computerChoice === 'scissor'){
    computerScore++;
    youWon = false;
  } else if(playerChoice === 'scissor' && computerChoice === 'paper'){
    playerScore++;
    youWon = true;
  } else{
    computerScore++;
    youWon=false;
  }
  document.getElementById("your-choice").innerHTML=`Your Choice: ${playerChoice}`;
  document.getElementById("computers-choice").innerHTML=`Computer's Choice: ${computerChoice}`;
  document.getElementById("result").innerHTML=``;
  document.getElementById("player-score").innerHTML=`Player Score: ${playerScore}`;
  document.getElementById("computer-score").innerHTML=`Computer's Score: ${computerScore}`;
  if(youWon === true || youWon === false) {result();}
}

function restart() {
  computerScore=0, playerScore=0;
  document.getElementById("player-score").innerHTML=`Player Score: ${playerScore}`;
  document.getElementById("computer-score").innerHTML=`Computer's Score: ${computerScore}`
}
