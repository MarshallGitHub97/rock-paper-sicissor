
function getComputerChoice(){

    let randomNumber = 0;
    randomNumber = Math.floor(Math.random() * 3) + 1;

    if(randomNumber == 1){
        return "Rock"
    }
    else if (randomNumber == 2) {
        return "Paper"
    }
    else if (randomNumber == 3) {
        return "Scissor"
    }

    return ""
}


function getHumanChoice() {
    let humanChoice = "";
    humanChoice = prompt("What is your Choice ?: ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    console.log("Human choice: " + humanChoice)
    console.log("Computer choice: " + computerChoice)

    if (humanChoice == computerChoice){
        console.log("No Winner this Time")
        return "none"
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissor") ||
        (humanChoice == "scissor" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ){
        console.log("Human wins")
        return "human"

    } 
    else if (
        (computerChoice == "rock" && humanChoice == "scissor") ||
        (computerChoice == "scissor" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "rock")
    )
    
    {
        console.log("Computer wins")
        return "computer"
    }

}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; humanScore < 5; i++){
        let winner = playRound(getHumanChoice(), getComputerChoice())
        
        if (winner == "human"){
            humanScore++
        } 
        else if (winner == "computer"){
            computerScore++
        }
        console.log("Human Score: " + humanScore)
        console.log("Computer Score " + computerScore)
    }

    if(humanScore > computerScore){
        console.log("You are the Winner")
    }
    else if(humanScore < computerScore){
        console.log("You lost, my dear Friend !!")
    } else {
        console.log("No Winner, No Chicken Dinner")
    }
}

playGame()