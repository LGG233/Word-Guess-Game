// Global elements
var Names = ["lionel barrymore", "clark gable", "burt lancaster", "spencer tracy", "james cagney", "james stewart", "charlie chaplin", "lee marvin",
"jeff bridges", "sean penn", "jodie foster", "john wayne", "marlon brando", "jack nicholson", "tom hanks", "anthony hopkins", "cate blanchett",
"katharine hepburn", "meryl streep", "bette davis", "ingrid bergman", "joan crawford", "vivian leigh", "audrey hepburn", "grace kelly", "frances mcdormand",
"hilary swank", "jessica lange", "faye dunaway", "ginger rogers"];
var nameArray = [];
var spacesArray = []; // random word broken into strings in array 
var correctInRemaining = []; // array to hold correct answers and remaining tiles
var guessedLetters = []; // bad letters chosen by users
var heldWord = ""; // variable to hold randomly picked word
var userChoice = "";
var guessRight = false; // boolean to describe whether userChoice is in random name or not 
var wordLength = 0;
var wins = 0;
var losses = 0;
var tries = 10;

// functions
function startGame() {
    heldWord = names[Math.floor((Math.random() * names.length) - 1)];
    nameArray = heldWord.split(""); // Breaks picked name into individual letters then puts each letter into the nameArray
    for (i = 0; i < nameArray.length; i++) {
        spacesArray[i] = "_";
        console.log(spacesArray.length)
        console.log(spacesArray);
        document.getElementById("nameArr").append(spacesArray[i] + " ");
    }
    console.log(heldWord);
    console.log(nameArray);
}


function evaluateChoice() {
    document.onkeydown = function (event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            userChoice = event.key;
            console.log(userChoice);
            if (heldWord.includes(userChoice)) {
                for (m = 0; m <heldWord.length; m++) {
                    if (userChoice === nameArray[m]) {
                        spacesArray[m] = userChoice.toUpperCase();
                        document.getElementById("nameArr").innerText = "";
                        spacesArray.forEach(y => document.getElementById("nameArr").append(y + " "));
                        console.log(guessRight);
                    }
                }
            }
            else {
                document.getElementById("guessed-letters").append(userChoice.toUpperCase() + " ");
            }
        } else {
            alert("Please pick a letter from A to Z");
        }
    }
}
console.log(userChoice);
console.log(guessRight);
startGame();
evaluateChoice();



// functions

