var gameNames = ["lionel barrymore", "clark gable", "burt lancaster", "spencer tracy", "james cagney", "james stewart", "charlie chaplin", "lee marvin",
    "jeff bridges", "sean penn", "jodie foster", "john wayne", "marlon brando", "jack nicholson", "tom hanks", "anthony hopkins", "cate blanchett",
    "katharine hepburn", "meryl streep", "bette davis", "ingrid bergman", "joan crawford", "vivian leigh", "audrey hepburn", "grace kelly", "frances mcdormand",
    "hilary swank", "jessica lange", "faye dunaway", "ginger rogers"];
var userTries = 0; // Tracks number of guesses
var randomName = ""; // Oscar winner randomly chosen from gameNames array
var nameArray = []; // individual letters of randomly chosen Oscar winner
var spacesArray = []; // array for holding "_" and " " of name to guess
var usedLetters = []; // Array to capture incorrect letters played by player
var userWins = 0; // Tracks number of player wins
var userLoss = 0; // Tracks number of player losses
var userChoice = ""; // placeholder variable for guessed letter
var letterPicked = "false"; // prevents letter from being put into used letter pile twice and being charged twice to player
var correctLetter = "false"
var addGuess = "true"; // variable used for scoring; if true, guess gets added to the number of guesses used in the game
document.getElementById("gamesWon").innerHTML = "0";
document.getElementById("gamesLost").innerHTML = "0";

$(document).ready(function () {
    $("#new-game-btn").hide();
    gameSetup();
})

function gameSetup() {
    randomName = gameNames[Math.floor(Math.random() * gameNames.length)];
    randomName = randomName.toUpperCase()
    nameArray = randomName.split("");
    for (var i = 0; i < nameArray.length; i++) {
        if (nameArray[i] != " ") {
            spacesArray[i] = ("_");
        } else {
            spacesArray[i] = " ";
        }
        document.getElementById("gameBoard").append(spacesArray[i]);
    }
    chooseLetter();
    resetGame();
}

function resetGame() {
    $(".button").on("click", function () {
        userTries = 0;
        randomName = "";
        nameArray = [];
        spacesArray = [];
        usedLetters = [];
        letterPicked = "false";
        document.getElementById("gameBoard").innerText = "";
        document.getElementById("used-letters").innerText = "";
        $("#new-game-btn").hide();
        gameSetup();
    })
}

function chooseLetter() {
    document.onkeydown = function (event) {
        $("#user-tries").text("You have used " + userTries + " of 15 guesses");
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userChoice = event.key;
            userChoice = userChoice.toUpperCase();
            for (var i = 0; i < usedLetters.length; i++) {
                if (userChoice === usedLetters[i]) {
                    return alert("You've already picked that letter. Try again.")
                }
            }
            usedLetters.push(userChoice);
            userTries = userTries + 1;
            if (randomName.includes(userChoice)) {
                for (m = 0; m < randomName.length; m++) {
                    if (userChoice === nameArray[m]) {
                        letterPicked = "true";
                        spacesArray[m] = userChoice.toUpperCase();
                        document.getElementById("gameBoard").innerText = "";
                        spacesArray.forEach(y => document.getElementById("gameBoard").append(y));
                    }
                }
            }
            else {
                document.getElementById("used-letters").append(userChoice.toUpperCase() + " ");
            }
            document.getElementById("remaining").innerHTML = "You have used " + userTries + " of 15 guesses.";
            evaluateScore();
        } else {
            alert("Please pick a letter from A to Z");
        }
    }
}
function evaluateScore() {
    if (spacesArray.includes("_")) {
        if (userTries == 15) {
            document.getElementById("remaining").innerHTML = "You have run out of tries. Game Over";
            document.onkeydown = null
            userLoss = userLoss + 1;
            document.getElementById("gamesLost").innerHTML = userLoss;
            $("#new-game-btn").show();
            $("#gameBoard").empty();
            for (p = 0; p < nameArray.length; p++) {
                $("#gameBoard").append(nameArray[p].toUpperCase());
            }
        }
    } else {
        document.onkeydown = null
        document.getElementById("remaining").innerHTML = "You win! Game Over.";
        userWins = userWins + 1;
        document.getElementById("gamesWon").innerHTML = userWins;
        $("#new-game-btn").show();
    }
}
