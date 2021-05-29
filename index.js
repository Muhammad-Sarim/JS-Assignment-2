// JavaScript Project # 2

//  JAVASCRIPT


// Assignment # 17-20



// ARRAYS AND LOOP Start


// Q:3  Write a program to print numeric counting from 1 to 10.
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }


// Q:4  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// var a = +prompt ("Enter any number");
// var b = +prompt ("Enter how much length you want in your table?");
// for (var i = 1; i <= b; i++) {
//     var c = a * i;
//     console.log(a + " X " + i + " = " + c);
// }


// Q:5  Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// console.log(fruits);
// console.log("fruit at index 0 is " + fruits[0] + " " + "fruit at index 1 is "  + fruits[1] + " " + "fruit at index 2 is " + fruits[2] + " " + "fruit at index 3 is " + fruits[3] + " " +"fruit at index 4 is " + fruits[4]);


// Q:6  Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//  c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// console.log("Counting:");
// for (var i = 1; i <= 15; i++) {
//     console.log(i);
// }

// console.log("Reverse counting:");
// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }

// console.log("Even:");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// console.log("Odd");
// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }


// Q:7  You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
//Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// var a = prompt("Welcome to MM Bakers what do you want to order?");
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
//     if (a <= items) {
//         alert (a + " is available in our bakery")
//     } else {
//         alert (a + " is not available in our bakery")
//     }


// Q:8  Write a program to identify the largest number in the given array. 
// A = [24, 53, 78, 91, 12].
// HAVE TO PRACTICE IT 
// NOT WORKING ?????????????????????????
// var a = [13, 40, 12, 36, 47, 58, 100];
// console.log(a);
// for (var i = 0; i < a; i++) { 
//     if (a[i] > i) {
//         console.log(i);
//     }
// }
// console.log(i);


// Q:9  Write a program to identify the smallest number in the given array. 
//A = [24, 53, 78, 91, 12]
// HAVE TO PRACTICE IT 
// NOT WORKING ?????????????????????????
// var a  = [24, 53, 78, 91, 12];
// for (var i = 0; i <= a[i]; i++) {
//     console.log(i);
// }


// Q:10  Write a program to print multiples of 5 ranging 1 to 100.
// console.log("Multiples of 5 ranging 1 to 100.");
// for (var i = 5; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// ARRAYS AND LOOP End










// Assignment # 21-25 


// JAVASCRIPT

// STRING METHODS Start


// Q:1  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
/*var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name.");
var fullName = firstName + " " + lastName;
console.log("Hello welcome" + " " + fullName);*/


// Q:2  Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.
/*var mobilePhoneModel = prompt("Enter your favorite mobile phone model");
console.log("My favorite mobile phone model is: " + mobilePhoneModel);
console.log("Length of character is: " + mobilePhoneModel.length);*/


// Q:3  Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
/*var Nationality = "I am Pakistani";
console.log("String: " + Nationality);
var Pakistani = Nationality.indexOf("n");
console.log("The length of 'n' in Pakistani is :" + Pakistani);*/


// Q:4  Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
/*var a = "Hello World";
console.log(a);
var b = a.lastIndexOf("l");
console.log("Last index of 'l' is: " + b);*/


// Q:5  Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
/*var Nationality = "I am Pakistani";
console.log("String: " + Nationality);
var a = "The letter at index 3 is :" + Nationality[8];
console.log(a);*/


// Q:6  Repeat Q1 using string concat() method.

// Q:1 ===>
//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
/*var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name.");
// STRING concat(Method)
var fullName = firstName.concat(" " + lastName);  
console.log("Hello welcome" + " " + fullName);*/


// Q:7 ===>  Write a program to replace the “Hyderabad” to “Islamabad” in the word “Hyderabad” and display the result in your browser.
/*var city = "My city is Hyderabad.";
console.log(city);
var replacement = "After replacement :" + city.replace("Hyderabad", "Islamabad")
console.log(replacement);*/


// Q:8  ===>   Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
/*var message = “Ali and Sami are best friends. They play cricket and football together.”;
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace("and", "&")
console.log(replace);*/


// Q:9  ===>   Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
/*var a = "value: 472"
console.log(a);
console.log("Type is : " + typeof(a));

var b = 472;
console.log(b);
console.log("Type is : " + typeof(b));*/



// Q:10  Write a program that takes user input. Convert and show the input in capital letters.
/*var a = prompt("Enter anything i will transform it into uppercase!");
var b = a.toUpperCase();
console.log(b);*/


// Q:11  Write a program that takes user input. Convert and show the input in title case.
//  var a = prompt("Enter anything i will transform it into title case");
//  var b = a.toLocaleUpperCase();
//  console.log(b);






// Q:12   ===>    Write a program that converts the variable num to string. 
// var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.
// var num = 35.36;
// console.log(num);
// var a = "35" ;
// var b = "36";
// console.log(a + b);


// Q:13  Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// var a = prompt("Enter your name.");
// for (var i = 0; i < a.length; i++) {
//     if (a === A)
// }



// Q:14  You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Enter your choice");
if (b === a.length[]) {
    console.log("We heave it");
}
else {
    console.log("We donot have it");
}
console.log(a);





// STRING METHODS End