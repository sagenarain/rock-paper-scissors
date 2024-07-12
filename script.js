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
        return 'please enter rock, paper or scissors'
    }
}
//scores
let humanScore = 0
let computerScore = 0
//play a round
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

    if(humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' ) {
        console.log('You win.')
    }
   else if(humanChoice === computerChoice) {
            console.log('Tie')
        }
        else {
                console.log('You lose.')
                }
            
            