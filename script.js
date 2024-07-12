// generate computer choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random() * choices.length);
    return choices[x]
}
//input player choice
function getHumanChoice() {
    let playerChoice
    playerChoice = prompt("enter a choice")
    if (playerChoice.toLowerCase() == 'rock') {
        return 'rock'
    } else if (playerChoice.toLowerCase() == 'paper') {
        return 'paper'
    } else if (playerChoice.toLowerCase() == 'scissors') {
        return 'scissors'
    } else {
        return 'invalid input'
    }
}
//play a game
let playGame = function() {
let humanScore = 0
let computerScore = 0
let playRound = function() {
    let humanChoice = getHumanChoice()
let computerChoice = getComputerChoice()
        if(humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' ) {
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You win.`);
            humanScore ++
        }
        else if(humanChoice === computerChoice) {
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. Tie.`);
        }
        else {
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}. You lose.`);
            computerScore ++
        }
}      
for(i = 0; i<5; i++){
    playRound()
}
console.log(`Your score ${humanScore}`)
console.log(`Computer score ${computerScore}`)
if(humanScore > computerScore) {
    console.log('You win')
} else if(humanScore === computerScore) {
    console.log('tie')
} else {
    console.log('You lose')
}
  }          
  playGame()