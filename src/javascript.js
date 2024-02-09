// if the favo button is clicked, i want to see the value in console.log of the input
// so if clicked favo => anything in input value to be shown in console log

// Select elements:
const numberInput = document.getElementById("number-input");
const favouriteBtn = document.getElementById("favourite-Btn");

favouriteBtn.addEventListener("click", () => {
 
  const inputValue = numberInput.value;
  console.log(`The value inside the number input is: ${inputValue}`);
});

