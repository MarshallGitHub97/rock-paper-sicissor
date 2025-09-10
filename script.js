
let humanResult = 0;
let computerResult = 0;

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
    document.querySelector("button", () => {
        humanChoice = button.value
    });
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == computerChoice){
        return "none"
    }
    else if(
        (humanChoice == "rock" && computerChoice == "scissor") ||
        (humanChoice == "scissor" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")
    ){
        humanResult++;
        return "human";

    } 
    else if (
        (computerChoice == "rock" && humanChoice == "scissor") ||
        (computerChoice == "scissor" && humanChoice == "paper") ||
        (computerChoice == "paper" && humanChoice == "rock")
    )
    
    {
        computerResult++;
        return "computer";
    }

}

const buttonList = document.querySelectorAll("button");

    buttonList.forEach((button) => {
            button.addEventListener("click", () => {
                if (button.value == "rock" || 
                    button.value == "paper" ||
                    button.value == "scissor"
                ){
                const humanChoice = button.value;
                const computerChoice = getComputerChoice();

                playRound(humanChoice, computerChoice)

                document.querySelector("#choice").textContent = `
                    Human selected: ${humanChoice}.
                    Computer selected ${computerChoice}.
                `
                document.querySelector("#result").textContent = `
                    The result is: Human has won ${humanResult} Games.
                    Computer has won ${computerResult} Games.

                `
                }
            }
        )
    }
)

document.querySelector("#reset").addEventListener("click", () => {
    humanResult = 0;
    computerResult = 0;

    document.querySelector("#result").textContent = `
        The result is: Human has won ${humanResult} Games.
        Computer has won ${computerResult} Games.
    `

})


