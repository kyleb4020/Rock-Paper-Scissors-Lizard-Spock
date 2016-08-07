var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or Spock?");
var computerChoice = Math.random();
if (computerChoice < 0.21) {
	computerChoice = "rock";
} else if(computerChoice < 0.41) {
	computerChoice = "paper";
} else if(computerChoice < 0.61) {
	computerChoice = "scissors";
} else if(computerChoice < 0.81) {
    computerChoice = "lizard";
} else {
    computerChoice = "Spock";
}
console.log("Computer: " + computerChoice);

var winner = function(choice1, choice2){
    var choice1 = userChoice;
    var choice2 = computerChoice;
    if(choice1 === choice2){
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if(choice2 === "scissors"){
            return "rock crushes scissors. Rock wins";
        } else if (choice2 === "lizard"){
            return "rock crushes lizard. Rock wins";
        } else if (choice2 === "Spock"){
            return "Spock vaporizes rock. Spock wins";
        } else {
            "paper covers rock. Paper wins";
        }
    } else if (choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper covers rock. Paper wins";
        } else if (choice2 === "lizard"){
            return "lizard eats paper. Lizard wins";
        } else if (choice2 === "Spock"){
            return "paper disproves Spock. Paper wins";
        } else {
            return "scissors cuts paper. Scissors wins";
        }
    } else if (choice1 === "scissors") {
        if(choice2 === "paper") {
            return "scissors cuts paper. Scissors wins";
        } else if (choice2 === "lizard"){
            return "scissors decapitates lizard. Scissors wins";
        } else if (choice2 === "Spock"){
            return "Spock smashes scissors. Spock wins";
        } else {
            return "rock crushes scissors. Rock wins";
        }
    } else if (choice1 === "lizard") {
        if(choice2 === "paper") {
            return "lizard eats paper. Lizard wins";
        } else if (choice2 === "scissors"){
            return "scissors decapitates lizard. Scissors wins";
        } else if (choice2 === "Spock"){
            return "lizard poisons Spock. Lizard wins";
        } else {
            return "rock crushes lizard. Rock wins";
        }
    }  else if (choice1 === "Spock") {
        if(choice2 === "scissors") {
            return "Spock smashes scissors. Spock wins";
        } else if (choice2 === "lizard"){
            return "lizard poisons Spock. Lizard wins";
        } else if (choice2 === "paper"){
            return "paper disproves Spock. Paper wins";
        } else {
            return "Spock vaporizes rock. Spock wins";
        }
    }else {
        return "A wise guy huh? Make sure you choice either rock, paper, scissors, lizard, or Spock";
    };
}
console.log("Result: " + winner(userChoice, computerChoice));
