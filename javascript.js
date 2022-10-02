//The game has 5 rounds with DRAW being possible.

function main() {   //3 buttons are found and event listeners are attached

    let buttonRock = document.getElementById("buttonRock");
    let buttonPaper = document.getElementById("buttonPaper");
    let buttonScissors = document.getElementById("buttonScissors");

    buttonRock.addEventListener("click", buttonPressed);
    buttonPaper.addEventListener("click", buttonPressed);
    buttonScissors.addEventListener("click", buttonPressed);

}

function buttonPressed(e) { //Function is launched every time the rock/ paper/ scissors button is pressed

    let userSelection = generateUserSelection(this.id);
    let computerSelection = getComputerSelection();
    let result = compare(userSelection, computerSelection);
    changeWebpage(result);
    checkCondition();

}

function generateUserSelection(buttonSelectionId) {   //Certain keyword is generated and returned each time the related button is pressed

    let playerEmojiResult = document.getElementById("playerEmojiResult");   //Player icon for selection is adjusted

    switch (buttonSelectionId) {
        case "buttonRock":
            playerEmojiResult.innerHTML = "&#9994";
            return "rock";
        case "buttonPaper":
            playerEmojiResult.innerHTML = "&#9995";
            return "paper";
        case "buttonScissors":
            playerEmojiResult.innerHTML = "&#9996";
            return "scissors"; 
    }

}

function getComputerSelection() {   //Random computer selection is generated and keyword is returned

    let number = Math.floor(Math.random()*3);
    let pcomputerEmojiResult = document.getElementById("computerEmojiResult");  //Computer icon for selection is adjusted

    switch (number) {
        case 0:
            computerEmojiResult.innerHTML = "&#9994";
            return "rock";
        case 1:
            computerEmojiResult.innerHTML = "&#9995";
            return "paper";
        case 2:
            computerEmojiResult.innerHTML = "&#9996";
            return "scissors";
    };
}

function compare(selectionUser, selectionComputer) { //Compare two keywords from user and computer and return the winner's number
                                                     //0 for draw, 1 for user wictroy, 2 for computer victory

    switch (selectionUser) {
        case "rock": 
            switch (selectionComputer) {
                case "rock": return 0;
                case "paper": return 2;
                case "scissors": return 1; 
            }
        case "paper":
            switch (selectionComputer) {
                case "rock": return 1;
                case "paper": return 0;
                case "scissors": return 2; 
            }
        case "scissors":
            switch (selectionComputer) {
                case "rock": return 2;
                case "paper": return 1;
                case "scissors": return 0; 
            }
        default: return;
    };

}

function changeWebpage(result) {    //According to results make changes to the webpage

    let announcement1 = document.getElementById("announcement1");   //Get both announcement elements and score elements
    let announcement2 = document.getElementById("announcement2");
    let playerTextResult = document.getElementById("playerTextResult");
    let computerTextResult = document.getElementById("computerTextResult");

    let newScore;

    switch (result) {   //Make changes to elements according to the results
        case 0:
            announcement1.innerHTML = "Draw!";
            announcement2.innerHTML = "Nobody won."; 
            break;
        case 1:
            announcement1.innerHTML = "You won the round!";
            announcement2.innerHTML = "Congratulations.";
            newScore = +playerTextResult.innerHTML[playerTextResult.innerHTML.length-1] + 1;
            playerTextResult.innerHTML = playerTextResult.innerHTML.slice(0, -1) + newScore; 
            break;
        case 2: 
            announcement1.innerHTML = "Computer won the round!";
            announcement2.innerHTML = "Better luck next time.";
            newScore = +computerTextResult.innerHTML[computerTextResult.innerHTML.length-1] + 1;
            computerTextResult.innerHTML = computerTextResult.innerHTML.slice(0, -1) + newScore; 
            break; 
    }
    return;

}

function checkCondition() { //Checks if any player have reached the score of 5 points

    let playerTextResult = document.getElementById("playerTextResult");         //Get score elements 
    let computerTextResult = document.getElementById("computerTextResult");

    let playerScore = +playerTextResult.innerHTML[playerTextResult.innerHTML.length-1];         //Extract the score
    let computerScore = +computerTextResult.innerHTML[computerTextResult.innerHTML.length-1];

    let announcement1 = document.getElementById("announcement1");   //Get announcement elements
    let announcement2 = document.getElementById("announcement2");

    let buttonRock = document.getElementById("buttonRock");         //Get button elements
    let buttonPaper = document.getElementById("buttonPaper");
    let buttonScissors = document.getElementById("buttonScissors");

    switch (true) {             //If any player has reached the score of 5 then turn off the buttons and display the relevant message
        case playerScore==5: 
            announcement1.innerHTML = "PLAYER WON THE GAME!";
            announcement2.innerHTML = "Reload the page to play again";
            buttonRock.removeEventListener("click", buttonPressed)
            buttonPaper.removeEventListener("click", buttonPressed)
            buttonScissors.removeEventListener("click", buttonPressed)
            break;
        case computerScore==5:
            announcement1.innerHTML = "COMPUTER WON THE GAME!";
            announcement2.innerHTML = "Reload the page to play again";
            buttonRock.removeEventListener("click", buttonPressed)
            buttonPaper.removeEventListener("click", buttonPressed)
            buttonScissors.removeEventListener("click", buttonPressed)
            break;
    }
}

main();
