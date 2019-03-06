var wins = 0;
var losses = 0;
var counter = 9;
var computerGuess;
var userGuess;
var lettersGuessed = [];

var alphabet = ["a", 
				"b", 
				"c", 
				"d", 
				"e", 
				"f", 
				"g", 
				"h", 
				"i", 
				"j", 
				"k", 
				"l", 
				"m", 
				"n", 
				"o", 
				"p", 
				"q", 
				"r", 
				"s", 
				"t", 
				"u", 
				"v", 
				"x", 
				"y", 
                "z"];
                
function spawnpsychicLetter() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
};

function guessedLetters() {
    document.getElementById("gfar").innerHTML = "Guessed So Far: " + lettersGuessed.join(",");
};

function tracker() {
    document.getElementById("gleft").innerHTML = "Guesses Left: " + counter;
};

function clearGuesses() {
    lettersGuessed = [];
};

function startGame() {
    counter = 9;
    clearGuesses();
    spawnpsychicLetter();
    guessedLetters();
    tracker();
};

function reset() {
    counter = 9;
};

document.onkeyup = function(event) {
    userGuess = event.key;
    counter--;
    lettersGuessed.push(userGuess);
    guessedLetters();
    tracker();
    // startGame();
    // console.log(counter > 0);
    

    if (counter > 0) {
        if (userGuess === computerGuess) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            startGame();
        };
    } else {
        // console.log('else');
        
            losses++;
            // var l = document.getElementById('losses');
            // console.log(l);
            
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            startGame();

    };

};
