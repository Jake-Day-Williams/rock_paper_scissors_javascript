var yourWins = 0;
var  computerWins = 0;
var tieCount = 0;
  
function rock() {
   choice("rock")
}

function paper() {
   choice("paper")
}  

function scissors() {
   choice("scissors")
}  



var choice = function(user_choice) {
  document.getElementById("output").innerHTML = "You chose " + user_choice;
  comChoice(user_choice);
}

var comChoice = function(userChoice) {
  var computerChoice = Math.random();

  if (computerChoice < 0.34) {
	  computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
  	computerChoice = "paper";
  } else {
	computerChoice = "scissors";
  }
  
  document.getElementById("computers").innerHTML = "Computer chose " + computerChoice;
  var theWinner = "Find Out";
  
  if (userChoice === computerChoice) {
        theWinner = "The result is a tie!"
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
        theWinner =("You Win!");
        } else {
            theWinner =("You Lose.");
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            theWinner =("You Win!");
        } else {
            theWinner =("You Lose.");
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            theWinner =("You Lose."); 
        } else {
            theWinner =("You Win!");
        }
    }

  document.getElementById("winnerIs").innerHTML = theWinner;

  if (theWinner === "You Win!") {
    yourWins++;
  } else if (theWinner === "You Lose.") {
    computerWins++;
  } else {
    tieCount++;
  }
  
  document.getElementById("scoreCount").innerHTML = "You:" + yourWins + " | " + "Computer:" + computerWins + " | " + "Ties:" + tieCount; 
}