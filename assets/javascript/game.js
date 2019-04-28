// Populate array with letters of alphabet
var totalChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Create game variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];
var psychicGuess = [];

// Create the psychic guess
var init = function() {
	var pGuess = totalChoices[Math.floor(Math.random() * totalChoices.length)];
	psychicGuess.push(pGuess);
	console.log(psychicGuess[0]); 
}

// Generate initial psychic guess
init();

// Logic for the game
document.onkeyup = function(event) {
    var playerGuess = event.key;
        guesses.push(playerGuess); 

    // Enforcing rules - key needs to be a lowercase letter
    if ((totalChoices.indexOf(playerGuess) < 0)) {
        alert("You need to choose a lowercase letter!!");
        guesses.pop(); // This ensures any errorenous key presses are removed from array
    }

    else if ((playerGuess === psychicGuess[0]) && (guessesLeft > 1)) {
        wins++;
        // Next three things reset the game, I repeat them in the Else statement, probably could be more efficient there
        guessesLeft = 10;
        guesses.length = 0;
        psychicGuess.length = 0;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        // HTML Resets
        document.getElementById("guessLeft").innerHTML = "Guesses left: 10";
        document.getElementById("totalGuess").innerHTML = "Guesses so far: ";
        // Throw up an alert letting the player know they won and the winning guess
        alert("Wow! You got it! The correct answer was '" + playerGuess + "'. Maybe you are psychic afterall.")
        init();
    }

    else if ((playerGuess !== psychicGuess[0]) && (guessesLeft > 1)) {
        guessesLeft = guessesLeft-1;
        document.getElementById("guessLeft").innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById("totalGuess").innerHTML = "Guesses so far: " + guesses;
    }

    else {
        losses++;
        guessesLeft = 10;
        guesses.length = 0;
        psychicGuess.length = 0;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guessLeft").innerHTML = "Guesses left: 10";
        document.getElementById("totalGuess").innerHTML = "Guesses so far: ";
        alert("Sorry! You ran out of guesses. Looks like you aren't psychic. :(")
        init();
    }

}