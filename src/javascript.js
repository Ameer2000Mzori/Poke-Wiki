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
