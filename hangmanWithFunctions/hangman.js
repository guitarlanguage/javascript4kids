alert(`Welcome to Hangman`);
// array of game words to pick from
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
// grab a random word from the array
var word = words[Math.floor(Math.random() * words.length)];
// empty array
var answerArray = [];
var wrongAnswers = [];

// fill the empty array with the proper amount of `_`
var fillEmptyArrayWithDashes = function () {
    for (var i = 0; i < word.length; i += 1) {
        // each time through the loop we print `_`;
        answerArray[i] = "_";
    }
    //keeps track of how many letters are left to be guessed.
    remainingLetters = word.length;
}
while (remainingLetters > 0) {
    var guessesLeft = 6;
    //game code goes here
    //show the players progress
    alert(answerArray.join(" "));
    if (guessesLeft !== 0) {
        // get a guess from the player
        var guess = prompt('guess a letter, or click Cancel to stop playing');
        guess = guess.toLowerCase();

        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert(`please enter a single letter`);
        } else {

            for (var j = 0; j < word.length; j += 1) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLetters -= 1;
                    guessesLeft -= 1;
                    console.log(guessesLeft);
                }
            }
        }
    } else {
        alert(`you lose, the word was ${word}`);
    }
}

alert(answerArray.join(" "));
alert(`good job, the word was ${word}`);