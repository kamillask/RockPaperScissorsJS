let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let value = Math.random();
    if(value <= .33){
        return "rock";
    } else if(value > .33 && value <= .66){
        return "paper";
    } else{
        return "scissors";
    }
}


function getHumanChoice(){
    let choice = window.prompt("Enter rock, paper, or scissors");
    return choice;
}


function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    if(human==="rock"){
        if(computerChoice==="rock"){
            return "Tie!";
        } else if(computerChoice==="paper"){
            computerScore++;
            return "You lose! Paper beats rock!";
        } else{
            humanScore++;
            return "You win! Rock beats scissors!";
        }
    }
    if(human==="paper"){
        if(computerChoice==="rock"){
            humanScore++;
            return "You win! Paper beats rock!";
        } else if(computerChoice==="paper"){
            return "Tie!";
        } else{
            computerScore++;
            return "You lose! Scissors beats paper!";
        }

    }
    if(human==="scissors"){
        if(computerChoice==="rock"){
            computerScore++;
            return "You lose! Rock beats paper!";
        } else if(computerChoice==="paper"){
            humanScore++;
            return "You win! Scissors beats paper!";
        } else{
            return "Tie!";
        }
    }
}


const selection = document.querySelector(".options");
const results = document.querySelector(".results");
selection.addEventListener("click", (event) => {
    let target = event.target;
    const compChoice = getComputerChoice();
    
    results.textContent = playRound(target.id, compChoice);

    if(humanScore===5){
        humanScore = 0;
        computerScore = 0;
        alert("You win!");
        
    }
    if(computerScore===5){
        humanScore = 0;
        computerScore = 0;
        alert("You lose!");
    }

    const youScore = document.querySelector("#you");
    const compScore = document.querySelector("#computer");
    youScore.textContent = `You: ${humanScore}`;
    compScore.textContent = `Computer: ${computerScore}`;
    
})






//PLAYS 5 ROUNDS

// function playGame(){
//     for(let i=0; i<5; i++){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(humanSelection, computerSelection));
//     }
//     if(humanScore>computerScore){
//         console.log("You win! You beat the computer!");
//     } else{
//         console.log("You lose! The computer got the best of you!");
//     }
// }

// console.log(playGame());

