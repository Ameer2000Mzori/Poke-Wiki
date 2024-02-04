// how do we select elements in javascript ?

const headerTitle = document.getElementsByClassName("header-Title")[0];
const favouriteBtn = document.getElementById("favourite-Btn");
const containersitems = document.querySelectorAll(".containers-items");

// this si console.log(favouriteBtn);
console.log(headerTitle);
console.log(favouriteBtn);
console.log(containersitems);

// for what reason im console loging

// our style title function

const styleTitle = () => {
  headerTitle.textContent = "Hello World";
  headerTitle.style.backgroundColor = "red";
};

// with buttons we can do event handlers lisnters
favouriteBtn.addEventListener("click", styleTitle);

// for each loop
containersitems.forEach((button) => {
  button.addEventListener("click", styleTitle);
});

// why 0 not 1
// array always begins with  0

// anonmoes function
// () => {}

// es6 arrow function
