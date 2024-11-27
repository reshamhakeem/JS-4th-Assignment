//Assignment # 26 - 30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let num = parseFloat(prompt("Enter a positive number: "));

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let num = parseFloat(prompt("Enter a negative floating point number: "));

// document.write("Number: " + num + '<br>');
// document.write("Round off value: " + Math.round(num) + '<br>');
// document.write("Floor value: " + Math.floor(num) + '<br>');
// document.write("Ceil value: " + Math.ceil(num) + '<br> <br>'
// );


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let num = parseFloat(prompt("Enter a number: "));

// document.write("The absolute value of " + num + " is " + Math.abs(num));


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// let userRoll = prompt("Press OK to roll the dice!");
// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random Dice Value: " + diceValue);



// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// let userChoice = parseInt(prompt("Enter 1 for Tails or 2 for Heads: "));
// let coinToss = Math.floor(Math.random() * 2) + 1;

// if (coinToss === 1) {
// document.write("Random Coin Value: Tails");
// } else {
// document.write("Random Coin Value: Heads");
// }

// if (userChoice === coinToss) {
// document.write("You Win!");
// } else {
// document.write("You Lose!");
// }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// let randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random Number between 1 and 100: " + randomNumber);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let userWeight = prompt("Enter your weight in kilograms ");
// let weightValue = userWeight.replace(/kgs|kilograms|kg/i, "");
// let weightNumber = parseFloat(weightValue);

// document.write("The weight of user is " + weightNumber + " kilograms");



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.


// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Guess a number between 1 and 10: "));

// if (userGuess === secretNumber) {
// document.write("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
// document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
// }