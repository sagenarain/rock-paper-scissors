let choices = ["rock", "paper", "scissors"];
// generate computer choice
function getComputerChoice() {
    let x = Math.floor(Math.random() * choices.length);
return choices[x]
}
//input player choice
function getPlayerChoice() {
    let playerChoice = prompt("enter a choice")
    if (playerChoice.toLowerCase() === 'rock') {
        return 'rock'
    } else if (playerChoice.toLowerCase() === 'paper') {
        return 'paper'
    } else if (playerChoice.toLowerCase() === 'scissors') {
        return 'scissors'
    } else {
        return 'please enter rock, paper or scissors'
    }
}
//scores
let humanScore = 0
let computerScore = 0
//play a round
function playRound(humanChoice, computerChoice) {}