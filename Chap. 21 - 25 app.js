//Assignment # 21-25



// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// Get user input for first name
// let firstName = prompt("Please enter your first name:");

// // Get user input for last name
// let lastName = prompt("Please enter your last name:");

// // Merge first and last names into fullName
// let fullName = firstName + " " + lastName;

// // Greet the user using their full name
// alert("Hello, " + fullName + "!");



// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.


// function findLength() {
//     let phoneModel = document.getElementById("phoneModel").value;
//     let length = phoneModel.length;
//     document.getElementById("result").innerHTML = "Your favorite phone is: " + phoneModel + "<br>Length of string: " + length;
//   }


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let word = "Pakistani";
// let index = word.indexOf("n");
// document.getElementById("result").innerHTML = "The index of letter 'n' in the word 'Pakistani' is: " + index;


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let word = "Hello World";
// let lastIndex = word.lastIndexOf("l");
// document.getElementById("result").innerHTML = "The last index of letter 'l' in the word 'Hello World' is: " + lastIndex;


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// let word = "Pakistani";
// let index = 3;
// let character = word.charAt(index);
// document.getElementById("result").innerHTML = "The character at the 3rd index in the word 'Pakistani' is: " + character;


// 6. Repeat Q1 using string concat() method.

// let firstName = prompt("Please enter your first name:");
// let lastName = prompt("Please enter your last name:");
// let fullName = "".concat(firstName, " ", lastName);
// alert("Hello, " + fullName + "!");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let word = "Hyderabad";
// let replacedWord = word.replace("Hyder", "Islam");
// document.getElementById("result").innerHTML = "City: " + word + "<br>After replacement: " + replacedWord;


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replacedMessage = message.replace(/and/g, "&");
// document.getElementById("result").innerHTML = "Original message: " + message + "<br>Replaced message: " + replacedMessage;


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let stringValue = "472";
// let numericValue = parseInt(stringValue);

// document.getElementById("result").innerHTML = 
// "Original Value: " + stringValue + " (Type: " + typeof stringValue + ")" + "<br>" +
// "Converted Value: " + numericValue + " (Type: " + typeof numericValue + ")";


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


// let userInput = prompt("User input: ");
// let capitalInput = userInput.toUpperCase();
// alert("Upper case: " + capitalInput);

// let userInput = prompt("User input: ");
// let titleCaseInput = userInput.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// alert("Title case: " + titleCaseInput);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let num = 35.36;
// let numString = num.toString();
// let result = numString.replace(".", "");
// document.write("Result: " + result);



// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let username = prompt("Enter your username: ");

// while (/[.@,!]/.test(username)) {
//   alert("Please enter a valid username.\n\n");
//   username = prompt("Enter your username: ");
// }

// alert("Username: " + username);


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

// let userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am? ").toLowerCase();

// let index = bakeryItems.map(item => item.toLowerCase()).indexOf(userInput);

// if (index !== -1) {
//   alert(`${userInput} is available at index ${index} in our bakery.`);
// } else {
//   alert(`We are sorry. ${userInput} is not available in our bakery.`);
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let password;
// while (true) {
//     password = prompt("Enter a password: ");
  
//     if (password.length < 6) {
//       alert("Password must be at least 6 characters long.");
//     } else if (!isNaN(password[0])) {
//       alert("Password can not begin with a number.\n\nPlease enter a valid password.");
//     } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//       alert("Password must contain both alphabets and numbers.");
//     } else {
//       alert("Password is valid.");
//       break;
//     }
//   }



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// let university = "University of Karachi";
// let universityArray = university.split("");

// document.write("Array elements: <br>");
// for (let i = 0; i < universityArray.length; i++) {
//   document.write(universityArray[i] + "<br>");
// }


// 17. Write a program to display the last character of a user
// input.

// let userInput = prompt("User Input ");
// let lastChar = userInput.charAt(userInput.length - 1);

// alert("Last character of input: " + lastChar);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// let string = "The quick brown fox jumps over the lazy dog";
// let count = string.toLowerCase().split("the").length - 1;

// alert("There are " + count + " occurrence(s) of word 'the'");
