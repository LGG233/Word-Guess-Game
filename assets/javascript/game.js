$(document).ready(function () {
    var allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "];
    var gameNames = ["lionel barrymore", "clark gable", "burt lancaster", "spencer tracy", "james cagney", "james stewart", "charlie chaplin", "lee marvin",
        "jeff bridges", "sean penn", "jodie foster", "john wayne", "marlon brando", "jack nicholson", "tom hanks", "anthony hopkins", "cate blanchett",
        "katharine hepburn", "meryl streep", "bette davis", "ingrid bergman", "joan crawford", "vivian leigh", "audrey hepburn", "grace kelly", "frances mcdormand",
        "hilary swank", "jessica lange", "faye dunaway", "ginger rogers"];

    var usedLetters = []; // Array to capture incorrect letters played by player
    var maxTries = 15; // set at 15 guesses per game -- figure out how player can choose this number?
    var wrongGuesses = 0; // Tracks number of wrong guesses; will be updated dynamically
    var userTries = 0; // Tracks number of guesses
    var userWins = 0; // Tracks number of player wins
    var userLoss = 0; // Tracks number of player losses
    var randomName = ""; // Oscar winner randomly chosen from gameNames array
    var nameArray = []; // individual letters of randomly chosen Oscar winner
    var letterArray = [] // creates array for holding gameBoard 
    var gameBoardCharacter = ""; // variable to hold disguised letter for gameBoard (as "_")

    document.getElementById('maxTries').innerHTML = maxTries; // Tells player number of guesses they have

    var arrayPosition = Math.floor((Math.random() * 30) - 1); // on game start, will select random Oscar winner from gameNames array
    var randomName = gameNames[arrayPosition]; // on game start, will select random Oscar winner from gameNames array
    console.log(randomName); // writes Oscar winner to be used in game to the Console Log

    var nameArray = randomName.split(""); // Breaks randomly selected name into individual letters that it puts into nameArray

    for (var k = 0; k < nameArray.length; k++) { // This for loop writes "_" for letters and " " for spaces to the gameBoard
        var gameBoardCharacter = (nameArray[k]);
        if (gameBoardCharacter != " ") {
            gameBoardCharacter = ("_");
        } else {
            gameBoardCharacter = " ";
        }
        document.getElementById("gameBoard").append(gameBoardCharacter);
        letterArray.push(gameBoardCharacter);
    };
    console.log(letterArray);


    document.onkeyup = function () { // gets letter from player, stores wrong guesses, rewrites gameBoard to include correct guesses
        if (event.keyCode >= 65 && event.keyCode <= 90) { // Captures letter clicked by player and checks to confirm an actual letter, not another key
            var userGuess = event.key
        } else document.getElementById("game-head").innerHTML = "Pick a letter between A and Z"; // tells player to pick a letter if the click different key

        console.log(userGuess); // writes userGuess to the Console Log

        var guessedLetter = false; // compare player letter to name of Oscar winner
        for (var y = 0; y < nameArray.length; y++) {
            if (nameArray[y] === userGuess) {
                guessedLetter = true;
            }
        }
        if (guessedLetter) {  // puts successfully selected letter into its position on the gameBoard
            for (var w = 0; w < nameArray.length; w++) {
                if (nameArray[w] === userGuess) {
                    letterArray[w] = userGuess;
                    document.getElementById("gameBoard").innerText = "";
                    letterArray.forEach(x => document.getElementById("gameBoard").append(x));
                }
            }
        }

        else if (event.keyCode >= 65 && event.keyCode <= 90) {
            usedLetters.push(userGuess); // pushes userGuess to the usedLetters array
            document.getElementById("used-letters").append(userGuess + " "); // writes the userGuess to the "used-letters" div 
            console.log(usedLetters + ": these are letters in the usedLetters array"); // writes the usedLetters array to the Console log
            wrongGuesses = wrongGuesses++;
            document.getElementById('maxTries').innerHTML = maxTries;
            document.getElementById("userTries").innerHTML = wrongGuesses;
        }
        if (randomName === (document.getElementById("gameBoard").innerText)) {
            document.getElementById("remaining").innerHTML = ("Nice job - you win!");
            userWins++
            document.getElementById("gamesWon").innerHTML = (userWins);
        }
                
        // else if usedLetters.push(guessedLetter); {// pushes userGuess to the usedLetters array
        //     document.getElementById("used-letters").append(userGuess + " "); // writes the userGuess to the "used-letters" div 
        //     document.getElementById('maxTries').innerHTML = maxTries;
        //     document.getElementById("userTries").innerHTML = wrongGuesses;
        //     wrongGuesses = wrongGuesses++;
        // }
    }
});
    // if (event.keyCode >= 65 && event.keyCode <= 90) { // checks if letter already chosen and adds new bad letters to usedLetters array
    // for (var a = 0; a < usedLetters.length; a++) {
    //     console.log(usedLetters)
    // })
// if (maxTries <= 0) {
//     document.getElementById("remaining").innerHTML = ("Good try but you didn't get it. The name is: ") + randomName;
//     userLoss++
// }

// });

// INSERT BUTTONS FOR PLAYER TO PICK LEVEL OF DIFFICULTY // DOES NOT WORK
    // $("#btnEasy").on("click", function () {
//     console.log("Easy clicked");
//     document.getElementById('btnEasy').disabled = 'disabled';
//     document.getElementById('btnMed').disabled = 'disabled';
//     document.getElementById('btnHard').disabled = 'disabled';
//     document.getElementById('btnExpert').disabled = 'disabled';
//     var userLevel = "Easy";
//     var maxTries = 20; // Tracks number of wrong letters a users can pick; will be populated with 5, 10, 15, or 20 depending on choice of player
//     document.getElementById("userLevelSelect").append(userLevel);
//     document.getElementById('maxTries').innerHTML = maxTries;
//     console.log(maxTries);
// });
// $("#btnMed").on("click", function () {
//     console.log("Medium clicked");
//     document.getElementById('btnEasy').disabled = 'disabled';
//     document.getElementById('btnMed').disabled = 'disabled';
//     document.getElementById('btnHard').disabled = 'disabled';
//     document.getElementById('btnExpert').disabled = 'disabled';
//     var userLevel = "Medium";
//     var maxTries = 15; // Tracks number of wrong letters a users can pick; will be populated with 5, 10, 15, or 20 depending on choice of player
//     document.getElementById("userLevelSelect").append(userLevel);
//     document.getElementById('maxTries').innerHTML = maxTries;
//     console.log(maxTries);
// });

// $("#btnHard").on("click", function () {
//     console.log("Hard clicked");
//     document.getElementById('btnEasy').disabled = 'disabled';
//     document.getElementById('btnMed').disabled = 'disabled';
//     document.getElementById('btnHard').disabled = 'disabled';
//     document.getElementById('btnExpert').disabled = 'disabled';
//     var userLevel = "Hard";
//     var maxTries = 10; // Tracks number of wrong letters a users can pick; will be populated with 5, 10, 15, or 20 depending on choice of player
//     document.getElementById("userLevelSelect").append(userLevel);
//     document.getElementById('maxTries').innerHTML = maxTries;
//     console.log(maxTries);
// });

// $("#btnExpert").on("click", function () {
//     console.log("Expert clicked");
//     document.getElementById('btnEasy').disabled = 'disabled';
//     document.getElementById('btnMed').disabled = 'disabled';
//     document.getElementById('btnHard').disabled = 'disabled';
//     document.getElementById('btnExpert').disabled = 'disabled';
//     var userLevel = "Expert";
//     var maxTries = 5; // Tracks number of wrong letters a users can pick; will be populated with 5, 10, 15, or 20 depending on choice of player
//     document.getElementById("userLevelSelect").append(userLevel);
//     document.getElementById('maxTries').innerHTML = maxTries;
//     console.log(maxTries);
// });

