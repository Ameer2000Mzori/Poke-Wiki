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

// filter is  filtered all the way through the array before filtering again

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 7);

// console.log(result);

//=> arry and object

// // arry
// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// // this is object
// let obj = {
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
//   5: "five",
//   6: "six",
//   7: "seven",
//   8: "eight",
//   9: "nine",
//   10: "ten",
//   11: "eleven",
// };

// // => object of arrys
// let objArry = {
//   name: ["Ameer", "sardar", "ahmed"],
//   AGE: [32, 35, 31],
// };

// // => how to get data from arry and objects

// // arry.forEach((item) => {
// //   console.log(item);
// // });

// // Object.keys(obj).forEach((i) => {
// //   console.log(obj[i]);
// // });

// // => arry of objects
// let arryObj = [
//   {
//     name: "Ameer",
//     age: 32,
//   },
//   {
//     name: "sardar",
//     age: 35,
//   },
//   {
//     name: "ahmed",
//     age: 31,
//   },
// ];

// arryObj.forEach((item) => {
//   console.log(" whole object", item);
//   //    if the name is Ameer we want to change it
//   if (item.name === "Ameer") {
//     item.name = "new X name";
//   }
//   console.log(" name of object", item.name);
//   console.log(" age of object", item.age);
// });

// // selecting element
// const headerTitle = document.getElementsByClassName("header-Title")[0];
// headerTitle.textContent = "hello";
// headerTitle.style.backgroundColor = "white";
// headerTitle.style.color = "red";

//  => creating elements
//  we create element like in html =>
// <div></div>
//
//
//
//
//
//
// //  => lets create card
// const cardsEl = document.createElement("div");
// cardsEl.classList = "cards";
// cardsEl.style.backgroundColor = "blue";

// const cardImg = document.createElement("img");
// cardImg.classList = "card-Img";
// cardImg.src = "./assets/7.png";

// const cardID = document.createElement("p");
// cardID.classList = "card-ID";
// cardID.textContent = "##2";

// const cardTitle = document.createElement("h1");
// cardTitle.id = "card-Title";
// cardTitle.textContent = "dog";

// const cardType = document.createElement("h4");
// cardType.classList = "card-Type";
// cardType.textContent = "new fire";

// //  => append
// cardsEl.append(cardID, cardImg, cardTitle, cardType);
// const cardWrap = document.getElementsByClassName("card-Wrap")[0];
// // this will append the element in the first place
// // cardWrap.prepend(divEl);
// // this will append the element in the last place
// cardWrap.append(cardsEl);

// =TASKS=

// ARRY DATA
const arryOBjects = [
  {
    id: 2,
    title: "anything-2",
    type: "anything-2",
  },
  {
    id: 3,
    title: "anything-3",
    type: "anything-3",
  },
  {
    id: 4,
    title: "anything-4",
    type: "anything-4",
  },
  {
    id: 5,
    title: "anything-5",
    type: "anything-5",
  },
  {
    id: 6,
    title: "anything-6",
    type: "anything-6",
  },
];

const headerWrap = document.querySelector(".card-wrap");

arryOBjects.forEach((item) => {
  const cardEl = document.createElement("div");
  cardEl.classList = "card";
  cardEl.style.backgroundColor = "blue";

  // Create and append the image element to the card element
  const cardImg = document.createElement("img");
  cardImg.classList = "card-img"; // Corrected class name
  cardEl.appendChild(cardImg); // Append image to card element

  // Append the card element to the headerWrap container
  headerWrap.appendChild(cardEl);
});



// => TASK
//-=> create 5 cards dynamically using forEach and append them to the card-wrap
//-=> give each element its classlist
//-=> for  id 3 background color to be red
//-=> for id 4 i want the title to be sardar


