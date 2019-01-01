
var numGuesses = 9; 
let pastGuess = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// calls function and assign random number to variable
var answer = getRandomInt(1,10);

ask();

function ask() {

// condition: when number of guesses is equal to zero
if (numGuesses === 0)  {
  alert("You've run out guesses")
  alert("End of the Game");
  return;
}

// ask user for input and convert into number 
var question = prompt("Guess a number between one and ten");
var integer = parseInt(question,10);

//adds user input to array
pastGuess.unshift(integer);
var pGuess = pastGuess;

//condition: If guess is correct 
if (integer === answer) {
  alert("Congratulations you've guessed correctly");
}

// condition: If guess is lower than answer
else if (answer > integer) {
  alert(`Sorry! Your guess of ${integer} was too low. You have ${numGuesses} guesses remaining. Your previous guesses were: ${pGuess}`);
  numGuesses--;
  ask();
}

//condition: If guess is higher than answer
else if (answer < question) {
  alert(`Sorry! Your guess of ${integer} was too high. You have ${numGuesses} guesses remaining. Your previous guesses were: ${pGuess}`);
  numGuesses--;
  ask();
}

//(Below  has been removed)
//condition: number not entered 
//else {
//alert("Please enter a number!")
//ask();
//}
}

