function parseUserSelection(selection) {
    selection = selection.toLowerCase();
    if (selection=="rock" || selection=="paper" || selection=="scissors" || selection=="stop") return selection;
    else return;
}

function getComputerSelection() {
    let number = Math.floor(Math.random()*3);

    switch (number) {
        case 0: 
            console.log("Computer selection: rock");
            return "rock";
        case 1: 
            console.log("Computer selection: paper");
            return "paper";
        case 2: 
            console.log("Computer selection: scissors");
            return "scissors";
        default: return;
    };
}

function compare(selection1, selection2) {

    switch (selection1) {
        case "rock": 
            switch (selection2) {
                case "rock": return 0;
                case "paper": return 2;
                case "scissors": return 1; 
            }
        case "paper":
            switch (selection2) {
                case "rock": return 1;
                case "paper": return 0;
                case "scissors": return 2; 
            }
        case "scissors":
            switch (selection2) {
                case "rock": return 2;
                case "paper": return 1;
                case "scissors": return 0; 
            }
        default: return;
    };

}


function main() {
    let userSelection;
    let computerSelection;
    let result;

    let userScore = 0;
    let computerScore = 0;


    for (let i = 0; i<5; i++){

        userSelection = prompt("Enter your selection (rock, paper, scissors): ");
        userSelection = parseUserSelection(userSelection);
        console.log("User selection: " + userSelection);

        if (!userSelection) {
            i-=1;
            console.log("Wrong selection! Try again!");
            continue;
        }

        if (userSelection=="stop") {
            console.log("The script is stopped.");
            break;
        }
        
        computerSelection = getComputerSelection();
        result = compare(userSelection, computerSelection);
        
        switch (result) {
            case 0:
                console.log("Round result: Draw!"); 
                break;
            case 1:
                userScore+=1; 
                console.log("Round result: User won the round!"); 
                break;
            case 2: 
                computerScore+=1;
                console.log("Round result: Computer won the round!"); 
                break; 
        }
    }

    switch (true) {
        case userScore==computerScore: 
            console.log("NOBODY WON THE GAME!");
            break;
        case userScore>=computerScore: 
            console.log("USER WON THE GAME!");
            break;
        case userScore<=computerScore: 
            console.log("COMPUTER WON THE GAME!");
            break;
    }
    
    return;
}

main();

// let selection = prompt("Enter your choice (rock, paper or scissors): ");
// console.log(compare("paper", "scissors"));
