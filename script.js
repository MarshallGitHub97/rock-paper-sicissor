
/*
Schreibe eine Funktion für die Auswahl des Computers
Die Funktion soll entweder "Rock", "Paper" oder "Scissor" zurückgeben
Test die Funktion in der Console 
*/

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

console.log(getComputerChoice())

/*
Die Funktion soll die Auswahl des menschlichen Spielers zurückgeben 

*/

function getHumanChoice() {
    let humanChoice = "";
    const readline = require("readline");
    let rl = readline.createInterface(process.stdin, process.stdout);
        rl.question("What is your Choice ?: ", (humanInput) => {
            humanChoice = humanInput
            return
        }
    )
    return humanChoice;
}

getHumanChoice();

return