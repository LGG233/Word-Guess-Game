var gameNames = ["lionel barrymore", "clark gable", "burt lancaster", "spencer tracy", "james cagney", "james stewart", "charlie chaplin", "lee marvin",
    "jeff bridges", "sean penn", "jodie foster", "john wayne", "marlon brando", "jack nicholson", "tom hanks", "anthony hopkins", "cate blanchett",
    "katharine hepburn", "meryl streep", "bette davis", "ingrid bergman", "joan crawford", "vivian leigh", "audrey hepburn", "grace kelly", "frances mcdormand",
    "hilary swank", "jessica lange", "faye dunaway", "ginger rogers"];
var userTries = 0; // Tracks number of guesses
var randomName = ""; // Oscar winner randomly chosen from gameNames array
var nameArray = []; // individual letters of randomly chosen Oscar winner
var spacesArray = [];
var usedLetters = []; // Array to capture incorrect letters played by player
var userWins = 0; // Tracks number of player wins
var userLoss = 0; // Tracks number of player losses
var userChoice = ""; // placeholder variable for guessed letter

document.getElementById("gamesWon").innerHTML = "0";
document.getElementById("gamesLost").innerHTML = "0";
randomName = gameNames[Math.floor((Math.random() * gameNames.length) - 1)];
randomName = randomName.toUpperCase()
nameArray = randomName.split("");

$(document).ready(function () {
    for (var i = 0; i < nameArray.length; i++) {
        if (nameArray[i] != " ") {
            spacesArray[i] = ("_");
        } else {
            spacesArray[i] = " ";
        }
        document.getElementById("gameBoard").append(spacesArray[i]);
    }
    chooseLetter();
    evaluateScore();

})
function chooseLetter() {
    document.onkeydown = function (event) {
        $("#user-tries").text("You have used " + userTries + " of 15 attempts");
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userChoice = event.key;
            userChoice = userChoice.toUpperCase();
            userTries = userTries + 1;
            document.getElementById("remaining").innerHTML = "You have used " + userTries + " of 15 tries.";
            for (var i = 0; i < usedLetters.length; i++) {
                if (userChoice === usedLetters[i]) {
                    alert("You've already picked that letter. Try again.")
                }
            }
            usedLetters.push(userChoice);
            console.log(userChoice);
            console.log("This is the used letters pile: " + usedLetters)
            if (randomName.includes(userChoice)) {
                for (m = 0; m < randomName.length; m++) {
                    if (userChoice === nameArray[m]) {
                        spacesArray[m] = userChoice.toUpperCase();
                        document.getElementById("gameBoard").innerText = "";
                        spacesArray.forEach(y => document.getElementById("gameBoard").append(y));
                    }
                }
            }
            else {
                document.getElementById("used-letters").append(userChoice.toUpperCase() + " ");
                console.log("this is the updated used letters pile: " + usedLetters)
            }
        } else {
            alert("Please pick a letter from A to Z");
        }
        console.log(spacesArray);
        console.log(nameArray);
    }
}
function evaluateScore() {
    if (nameArray === spacesArray) {
        document.getElementById("remaining").innerHTML = "You win! Game Over.";
        userWins = userWins + 1;
        console.log(userWins);
        document.getElementById("gamesWon").innerHTML = userWins;
        $("#buttons").show();
    }
    else if (userTries == 15) {
        document.getElementById("remaining").innerHTML = "You have run out of tries. Game Over";
        userLoss = userLoss + 1;
        console.log(userLoss);
        document.getElementById("gamesLost").innerHTML = userLoss;
        $("#buttons").show();
        for (p = 0; p < spacesArray.length; p++) {
            document.getElementById("gameBoard").innerText = spacesArray[m].toUpperCase();
        }
    }
}
