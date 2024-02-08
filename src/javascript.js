// if the favo button is clicked, i want to see the value in console.log of the input
// so if clicked favo => anything in input value to be shown in console log

// selecte element :
const numberinput = document.getElementById("number-input");
const favouriteBtn = document.getElementById("favourite-Btn");
// const header1 = document.getElementsByClassName("header")[0];

favouriteBtn.addEventListener("click", () => {

  console.log(`When you click no favourite it will count numbers of clicks ${numberInput}`);
})
