const favoriteButton = document.getElementById("favourite-Btn");
const containersItems = document.querySelectorAll('.containers-items');

///task two is doner ::::
containersItems.forEach((container) => {
  container.addEventListener("click", () => {
 favoriteButton.style.backgroundColor = 'green';
  })


});









// why 0 not 1
// array always begins with  0

// anonmoes function
// () => {}

// es6 arrow function

// 2- when any of the buttosn is clicked i want to see the background color
// of favorite button is changed - NOT DONE

// 3- when a value is intered in the input, then i want after clicking the favorite button
// i want the title from Pokedex to change to the value was in side of the input - NOT DONE

// i want your task (2, 3) that i give you under this line
// -----------------------------------------------------







