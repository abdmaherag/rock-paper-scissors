function getComputerChoice(){
    const options = ["Rock","Paper","Scissors"]
    const random =Math.floor(Math.random() * options.length) // picks a random array elemnt
    return options[random] //returns an element randomly
}

//end of computer selection
// player selection
function playerChoice(){
    let choice = prompt("Let's play Rock Paper Scissors. Pick your weapon!")
    choice=choice.toLocaleLowerCase();
    return choice
}
// end of palyer selection
var playerScore=0;
var computerScore=0;
function playGame(){
    const announce = document.querySelector('#announce');
    let playerSelection=playerChoice()
    let computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLocaleLowerCase();
    //computerSelection rock 
    if ((playerSelection == "rock") && (computerSelection == "rock")){
        const rockTie = document.createElement('div');
        rockTie.textContent="It's a tie! Rocks can't beat each other:>";
        announce.appendChild(rockTie)
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")){
        const paperW = document.createElement('div');
        paperW.textContent="You win! Paper beats Rock";
        announce.appendChild(paperW)
        playerScore++;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")){
        const scissorsL = document.createElement('div');
        scissorsL.textContent = "You lost! Rock beats Scissors :<"
        announce.appendChild(scissorsL)
        computerScore++;
    }
    //computerSelection paper 
    else if ((playerSelection == "rock") && (computerSelection == "paper")){
        const paperL = document.createElement('div')
        paperL.textContent="You lost! Paper beats Rock :<"
        announce.appendChild(paperL)
        computerScore++;
    }
    else if ((playerSelection == "paper") && (computerSelection == "paper")){
        const paperTie = document.createElement('div')
        paperTie.textContent="It's a tie! Paper can't beat eachother."
        announce.appendChild(paperTie)
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        const scissorsW= document.createElement('div')
        scissorsW.textContent="You Win! Scissors beats Paper :>"
        announce.appendChild(scissorsW)
        playerScore++;
    }
    //computerSelection scissors
    else if ((playerSelection == "rock") && (computerSelection == "scissors")){
        const rockW = document.createElement('div')
        rockW.textContent = "You win! Rock beats scissor :>"
        announce.appendChild(rockW)
        playerScore++;
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")){
        console.log("You Lost! Scissors beats paper :<");
        const slp = document.createElement('div')
        slp.textContent ="You Lost! Scissors beats paper :<"
        announce.appendChild(slp)
        computerScore++;
    }
    else if ((computerSelection.toLocaleLowerCase() == "scissors")){
        console.log("It's a tie! Scissors can't beat eachother");
        const scissorTie = document.createElement('div')
        scissorTie.textContent= "It's a tie! Scissors can't beat eachother"
        announce.appendChild(scissorTie)
    }

    console.log(playerScore);
    console.log(computerScore);
    console.log(computerSelection);
    console.log(playerSelection);
}

// while(computerScore <= 4 && playerScore <= 4){
// playGame()
// }
// playGame()

const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(button){
button.style.padding = '8px'
button.style.marginRight='8px'
})

//Rock button styles
const rock = document.querySelector("#rock")
rock.textContent='Rock'

//Paper button styles
const paper = document.querySelector("#paper")
paper.textContent='Paper'

//Scissors button styles
const scissors = document.querySelector("#scissors")
scissors.textContent='Scissors'
function playGameButtons(){

let computerSelection = getComputerChoice();

const rockClicked = rock.addEventListener('click', function(){
    console.log('You chose rock!');
    console.log(computerSelection);
    if ((computerSelection.toLocaleLowerCase() == "rock")){
        const rockTie = document.createElement('div');
        rockTie.textContent="It's a tie! Rocks can't beat each other:>";
        announce.appendChild(rockTie)
    }
    else if ((computerSelection.toLocaleLowerCase() == "paper")){
        const paperW = document.createElement('div');
        paperW.textContent="You LOST! Rocks can't beat Paper :<";
        announce.appendChild(paperW)
        computerScore++;

    }
    else if ((computerSelection.toLocaleLowerCase() == "scissors")){
        const scissorsL = document.createElement('div');
        scissorsL.textContent = "You WIN! Rock beats Scissors :>"
        announce.appendChild(scissorsL)
        playerScore++;

    }
});
const paperClicked = paper.addEventListener('click', function(){
    console.log('You chose Paper!');
    if ((computerSelection.toLocaleLowerCase() == "rock")){
        const rockTie = document.createElement('div');
        rockTie.textContent="You WIN! Paper beats Rock :>";
        announce.appendChild(rockTie)
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if ((computerSelection.toLocaleLowerCase() == "paper")){
        const paperW = document.createElement('div');
        paperW.textContent="It's a tie! Papers can't beat eachother.";
        announce.appendChild(paperW)
    }
    else if ((computerSelection.toLocaleLowerCase() == "scissors")){
        const scissorsL = document.createElement('div');
        scissorsL.textContent = "You LOST! Papers loses to Scissors :<"
        announce.appendChild(scissorsL)
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
    }
});
const scissorsClicked = scissors.addEventListener('click', function(){
    console.log('You chose Scissors!');
    if ((computerSelection.toLocaleLowerCase() == "rock")){
        const rockTie = document.createElement('div');
        rockTie.textContent="You LOST! Rock beats Scissors :>";
        announce.appendChild(rockTie)
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if ((computerSelection.toLocaleLowerCase() == "paper")){
        const paperW = document.createElement('div');
        paperW.textContent="You WIN! Scissors beats Paper.";
        announce.appendChild(paperW)
        playerScore++;
        console.log(playerScore);
        console.log(computerScore);
    }
    else if ((computerSelection.toLocaleLowerCase() == "scissors")){
        const scissorsL = document.createElement('div');
        scissorsL.textContent = "It's a Tie! Scissors can't beat eachother"
        announce.appendChild(scissorsL)
    }
}); 
console.log(playerScore);
console.log(computerScore);
}
// while(computerScore <= 4 && playerScore <= 4){
//     playGameButtons()
//  }
    playGameButtons()
