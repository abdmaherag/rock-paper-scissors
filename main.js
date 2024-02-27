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
        console.log("It's a tie!");
        const rockTie = document.createElement('div');
        rockTie.textContent="It's a tie! Rocks can't beat each other:>";
        announce.appendChild(rockTie)
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")){
        console.log("You win! Paper beats Rock :>");
        const paperW = document.createElement('div');
        paperW.textContent="You win! Paper beats Rock";
        announce.appendChild(paperW)
        playerScore++;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")){
        console.log("You lost! Rock beats Scissors :<");
        const scissorsL = document.createElement('div');
        scissorsL.textContent = "You lost! Rock beats Scissors :<"
        announce.appendChild(scissorsL)
        computerScore++;
    }
    //computerSelection paper 
    else if ((playerSelection == "rock") && (computerSelection == "paper")){
        console.log("You lost! Paper beats Rock :<");
        const paperL = document.createElement('div')
        paperL.textContent="You lost! Paper beats Rock :<"
        announce.appendChild(paperL)
        computerScore++;
    }
    else if ((playerSelection == "paper") && (computerSelection == "paper")){
        console.log("It's a tie! Paper can't beat eachother.");
        const paperTie = document.createElement('div')
        paperTie.textContent="It's a tie! Paper can't beat eachother."
        announce.appendChild(paperTie)
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        console.log("You Win! Scissors beats Paper :>");
        const scissorsW= document.createElement('div')
        scissorsW.textContent="You Win! Scissors beats Paper :>"
        announce.appendChild(scissorsW)
        playerScore++;
    }
    //computerSelection scissors
    else if ((playerSelection == "rock") && (computerSelection == "scissors")){
        console.log("You win! Rock beats scissor :>");
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
    else if ((playerSelection == "scissors") && (computerSelection == "scissors")){
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

const rockClicked = rock.addEventListener('click', function(){
    console.log('You chose rock!');
});
const paperClicked = paper.addEventListener('click', function(){
    console.log('You chose Paper!');
});
const scissorsClicked = scissors.addEventListener('click', function(){
    console.log('You chose Scissors!');
});
