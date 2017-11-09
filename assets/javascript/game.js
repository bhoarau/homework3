//computer guess options
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//starting variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

//randomize computer choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// the user 9 guesses with how many guesses left after each attempt
var updateGuessesLeft = function () {

    document.querySelector('#guessLeft').innerHTML = "Attempts left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};

var updateGuessesSoFar = function () {
    // display what has been guessed
    document.querySelector('#let').innerHTML = "Atemmpted so far: " + guessedLetters.join(', ');
};

// reset function start over
var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

//user guess when key pressed
document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();
    
    //displays wins
    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("WOW your psychic! " + letterToGuess);
            reset();
        }
    } 
    
    else if (guessesLeft == 0) {
        // displays losses
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Your not psychic, =/ try again!");
        reset();
    }
};