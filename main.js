function getComputerChoice(){
    const options = ["Rock","Paper","Scissors"]
    const random =Math.floor(Math.random() * options.length) // picks a random array elemnt
    return options[random] //returns an element randomly
}
let computerSelection = getComputerChoice();
computerSelection = computerSelection.toLocaleLowerCase();
//end of computer selection
// player selection
function playerChoice(){
    let choice = prompt("Let's play Rock Paper Scissors. Pick your weapon!")
    choice=choice.toLocaleLowerCase();
    return choice
}
let playerSelection=playerChoice()
// end of palyer selection

function playRound(){
    let playerScore=0;
    let computerScore=0;
    for(let i = 0; i<10; i++){
    if(computerScore <= 5 && playerScore <= 5){

    //computerSelection rock 
    if ((playerSelection == "rock") && (computerSelection == "rock")){
        console.log("It's a tie!");
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")){
        console.log("You win! Paper beats Rock :>");
        playerScore++;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")){
        console.log("You lost! Rock beats Scissors :<");
        computerScore++;
    }
    //computerSelection paper 
    else if ((playerSelection == "rock") && (computerSelection == "paper")){
        console.log("You lost! Paper beats Rock :<");
        computerScore++;
    }
    else if ((playerSelection == "paper") && (computerSelection == "paper")){
        console.log("It's a tie! Paper can't beat eachother.");
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        console.log("You Win! Scissors beats Paper :>");
        playerScore++;
    }
    //computerSelection scissors
    else if ((playerSelection == "rock") && (computerSelection == "scissors")){
        console.log("You win! Rock beats scissor :>");
        playerScore++;
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")){
        console.log("You Lost! Scissors beats paper :<");
        computerScore++;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "scissors")){
        console.log("It's a tie! Scissors can't beat eachother");
    }
    else{
        console.log("Please enter either Rock, Paper or Scissors");
    }
    console.log(playerScore);
    console.log(computerScore);
    
}}}

console.log(computerSelection);
console.log(playerSelection);
playRound()
