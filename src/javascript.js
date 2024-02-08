

// how do we select elements in javascript ?

const headerTitle = document.getElementsByClassName("header-Title")[0];
const favouriteBtn = document.getElementById("favourite-Btn");
const containersitems = document.querySelectorAll(".containers-items");



    favouriteBtn.addEventListener("click", () => {
        headerTitle.style.backgroundColor = "red";
    })
})

 console.log(favouriteBtn);
console.log(headerTitle);
console.log(favouriteBtn);
console.log(containersitems);

// for what reason im console loging

// our style title function

const styleTitle = () => {
    favouriteBtn.textContent = "Hello World";
  favouriteBtn.style.backgroundColor = "red";
};

// with buttons we can do event handlers lisnters
favouriteBtn.addEventListener("click", styleTitle);

// for each loop
containersitems.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });
});



// es6 arrow function

// 2- when any of the buttosn is clicked i want to see the background color
// of favorite button is changed - NOT DONE

// 3- when a value is intered in the input, then i want after clicking the favorite button
// i want the title from Pokedex to change to the value was in side of the input - NOT DONE

// i want your task (2, 3) that i give you under this line
// -----------------------------------------------------
