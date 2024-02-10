// console.log("Hello World!");

// => ways to declare variables

// var    <= es5
// let    <= es6 <= can be reassigned <= use them in deep functions
// const  <= es6 <= can't be reassigned
// var ameer = "John";

// function test() {
//   function test2() {
//     function test3() {
//       ameer = "sardar";
//       console.log(ameer);
//     }
//     test3();
//   }
//   test2();
// }
// test();

// => variables

// const name = "John";
// const age = 30;
// const on = false;
// let password;
// let nonPassword = NaN;

// console.log("type of name : ", typeof name);
// console.log("type of age : ", typeof age);
// console.log("type of on : ", typeof on);
// console.log("type of on : ", typeof password);
// console.log("type of on : ", typeof nonPassword);

// // => how to change variables

// let num = 100;

// console.log("type of num : ", typeof num);

// // change type of num from number to string
// let num1 = num.toString();
// let num2 = parseInt(num);

// console.log("type of num after change : ", typeof num);

// console.log("type of num1 after string : ", typeof num1);
// console.log("type of num2 after number : ", typeof num2);

// // =>  cunctuations

// let numbersBox1 = 1;
// let numbersBox2 = 1;

// console.log("cuncat + ", ++numbersBox1);

// console.log("cuncat - ", --numbersBox2);

// console.log("cuncat * ", 1 * numbersBox1);

// // =>  numbers mothods like floor and round and ceil

// let number1 = 3.9;
// console.log("number1 before cahgne", number1);
// number1 = Math.floor(number1);
// console.log("number1 after cahgne", number1);
// console.log("===========================");

// // if the number is close to 0 it will be zero
// // else if the number is close to 1 it will be one
// //
// //                                        |
// //                    3 <= 3.1 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8 , 3.9  => 4
// let number2 = 3.5;
// console.log("number2 before cahgne", number2);
// number2 = Math.round(number2);
// console.log("number2 after cahgne", number2);
// console.log("===========================");

// // ceil works as following
// // ceil will always go top of the number

// let number3 = 3.1;
// console.log("number3 before cahgne", number3);
// number3 = Math.ceil(number3);
// console.log("number3 after cahgne", number3);
// console.log("===========================");

// // ceil works as following
// // ceil will always go top of the number

// let number4 = 3.1;
// console.log("number4 before cahgne", number4);
// console.log(Math);
// number4 = Math.sqrt(number4);
// console.log("number4 after cahgne", number4);
// console.log("===========================");

// // random  works as following
// // random  will ganorate a random number between 0 and 1

// let number5;
// console.log("number5 before cahgne", number5);

// number5 = Math.trunc(Math.random() * 100) + 1;
// console.log("number5 after cahgne", number5);
// console.log("===========================");

// why we use and why we need all of these mothods?

/*

if you build project for a bank what do you use  ?

=> bank project
numbers alot of numbers and flexible in numbers

let money  = 0.99;
0.1EU cent
if(money < 1){
0.1EU i wanna use ceil =>  1 EU
console.log(sorry we cant sent less then 1EU);
}

=> real state project 
 name= Ameer 
 age= 30
 if ( number > 0 ){
  console.log("sorry you are not here");
 }
 appointments = 30/1/2024
 comment = i like the house 

*/

// // =>  conditionals

// let on = true;
// let userName = "Sardar";
// // if else lader
// if (on) {
//   console.log("you are on", on);
// } else if (!on) {
//   console.log("you are off", on);
// } else {
//   console.log("is not a boolean");
// }

// //  Conditional (ternary) operator
// userName === "ameer"
//   ? console.log("name is Ameer")
//   : userName === "john"
//   ? console.log("name is John")
//   : userName === "Sardar"
//   ? console.log("name is Sardar")
//   : console.log("name is not found");

//  => the code you make in your job
//  most likely will come back to you later on  <=

//  switch condition

// let dayNow = "a";
// let day;
// switch (dayNow) {
//   case "Sunday":
//     day = "Sunday";
//     console.log("the day is", day);
//     break;
//   case "Monday":
//     day = "Monday";
//     console.log("the day is", day);
//     break;
//   case "Tuesday":
//     day = "Tuesday";
//     console.log("the day is", day);
//     break;
//   case "Wednesday":
//     day = "Wednesday";
//     console.log("the day is", day);
//     break;
//   case "Thursday":
//     day = "Thursday";
//     console.log("the day is", day);
//     break;
//   //  =>  case "Friday":
//   case "Friday":
//     day = "Friday";
//     console.log("the day is", day);
//     break;
//   case "Saturday":
//     day = "Saturday";
//     console.log("the day is", day);
//   default:
//     console.log("there is no day like that");
// }

//  === equal  also with strings
// !==  not equal
//  == equal

//  =>  loops

// let weather = "%51";
// let city = "Dohok";
// let going = false;

//// removed all non-digit characters
// weather = weather.replace(/\D/g, "");
// // we replace all everything from string to number
// weather = parseInt(weather);
// console.log(weather);

// weather > 50 ? console.log("we will not go") : console.log("we will  go");

//  array and object

// this is arry
// let arry = [1, 2, 3, 4, 5, 6, 7];
// console.log(arry);

// console.log(arry); and check the prototype

// this is how at works
// console.log(arry.at(2));

//=> this is how every works
// every  => everything inside the array should be 7
// else it will return false
// let trueOrFalse = arry.every((item) => item === 7);
// console.log(trueOrFalse);

//=> this is how some works
// some works as following your array if it has
// only one element 7 then it will return true
// else it will return false
// let trueOrFalse = arry.some((item) => item === 7);
// console.log(trueOrFalse);

//=> this is how find works
// find works as following your array if it has the elment
// and it will store it fro you in new variable and you can use
// it

// let foundElement = arry.find((item) => item === 12);
// if (foundElement) {
//   console.log("we found it", foundElement);
// } else {
//   console.log("we did not find it");
// }

//=> this is how filter works
//
//

// let filterArry = [1, 2, 3, 4, 5, 6, 7, 12];
// console.log("our array before filtering", filterArry);

// //  !== this means does not equal
// //  == / === this means equals

// filterArry = filterArry.filter((item) => item === 12);

// if (filterArry) {
//   console.log("we found it", filterArry);
// } else {
//   console.log("we did not find it");
// }
