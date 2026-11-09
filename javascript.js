let playerScore=0;
let computerScore=0;
let playerChoice;
let computerChoice;
let compScore = document.getElementById("result");

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

  // console.log(playerScore, computerScore)
  document.getElementById("your-choice").innerHTML=`Your Choice: ${playerChoice}`;
  document.getElementById("computers-choice").innerHTML=`Computer's Choice: ${computerChoice}`;
  document.getElementById("result").innerHTML=``;
  document.getElementById("player-score").innerHTML=`Player Score: ${playerScore}`;
  document.getElementById("computer-score").innerHTML=`Computer's Score: ${computerScore}`;


}
