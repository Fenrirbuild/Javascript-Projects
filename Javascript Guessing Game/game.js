// creat a secret number
//check the user number
var secretNumber = 4;
//ask user for their number 
var guess = Number(prompt("Please guess a number between 1 to 10"));

//check if guess is right
if (guess === secretNumber ) {
	alert("You guessed it right!")
}
else if (guess > secretNumber) {
alert("Um.... son the number is too high")
}
else {
alert("Um.... son the number is too low")
}