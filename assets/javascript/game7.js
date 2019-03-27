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
var letterPicked = "false";
document.getElementById("gamesWon").innerHTML = "0";
document.getElementById("gamesLost").innerHTML = "0";
randomName = gameNames[Math.floor((Math.random() * gameNames.length) - 1)];
randomName = randomName.toUpperCase()
nameArray = randomName.split("");

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
        console.log("new game button clicked");
        userTries = 0; // Tracks number of guesses
        randomName = ""; // Oscar winner randomly chosen from gameNames array
        nameArray = []; // individual letters of randomly chosen Oscar winner
        spacesArray = [];
        usedLetters = []; // Array to capture incorrect letters played by player
        document.getElementById("gameBoard").innerText = "";
        document.getElementById("used-letters").innerText = "";
        // document.getElementById("user-tries").innerText = "You have used " + userTries + " of 15 attempts";
        $("#new-game-btn").hide();
        gameSetup();
    })
}

function chooseLetter() {
    document.onkeydown = function (event) {
        $("#user-tries").text("You have used " + userTries + " of 15 attempts");
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterPicked = "false";
            userChoice = event.key;
            userChoice = userChoice.toUpperCase();
            userTries = userTries + 1;
            document.getElementById("remaining").innerHTML = "You have used " + userTries + " of 15 tries.";
            for (var i = 0; i < usedLetters.length; i++) {
                if (userChoice === usedLetters[i]) {
                    letterPicked = "true";
                    alert("You've already picked that letter. Try again.")
                }
            }
            usedLetters.push(userChoice);
            console.log(userChoice);
            console.log("This is the used letters pile: " + usedLetters)
            if (randomName.includes(userChoice)) {
                for (m = 0; m < randomName.length; m++) {
                    if (userChoice === nameArray[m]) {
                        letterPicked = "true";
                        spacesArray[m] = userChoice.toUpperCase();
                        document.getElementById("gameBoard").innerText = "";
                        spacesArray.forEach(y => document.getElementById("gameBoard").append(y));
                    }
                }
            } else {
                if (letterPicked === "false") {
                    document.getElementById("used-letters").append(userChoice.toUpperCase() + " ");
                }
                // console.log("this is the updated used letters pile: " + usedLetters)
            }
            evaluateScore();
        } else {
            alert("Please pick a letter from A to Z");
        }
        console.log(spacesArray);
        console.log(nameArray);
    }
}
function evaluateScore() {
    if (spacesArray.includes("_")) {
        console.log("not done yet");
        // return
        if (userTries == 15) {
            console.log("ran out of tries");
            document.getElementById("remaining").innerHTML = "You have run out of tries. Game Over";
            document.onkeydown = null
            userLoss = userLoss + 1;
            console.log(userLoss);
            document.getElementById("gamesLost").innerHTML = userLoss;
            $("#new-game-btn").show();
            $("#gameBoard").empty();
            for (p = 0; p < nameArray.length; p++) {
                $("#gameBoard").append(nameArray[p].toUpperCase());
                // document.getElementById("gameBoard").innerText = nameArray[p].toUpperCase();
            }
        }
    } else {
        console.log("winner, winner, chicken dinner")
        document.onkeydown = null
        document.getElementById("remaining").innerHTML = "You win! Game Over.";
        userWins = userWins + 1;
        console.log(userWins);
        document.getElementById("gamesWon").innerHTML = userWins;
        $("#new-game-btn").show();
    }
}
