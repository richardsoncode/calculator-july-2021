// import functions
import  { add, subtract, multiply, divide } from "./utils.js";
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiplication-button");
const divideButton = document.getElementById("division-button");
const answerBoxAdd = document.getElementById("answerbox-add");
const plusNumberOne = document.getElementById("plus-number-one")
const plusNumberTwo = document.getElementById("plus-number-two");
const minusNumberOne = document.getElementById("minus-number-one");
const minusNumberTwo = document.getElementById("minus-number-two");
const answerBoxSubtract = document.getElementById("answerbox-subtract"); 
const timesNumberOne = document.getElementById("times-number-one");
const timesNumberTwo = document.getElementById("times-number-two");
const answerBoxTimes = document.getElementById("answerbox-times"); 
const divNumberOne = document.getElementById("divided-number-one");
const divNumberTwo = document.getElementById("divided-number-two");
const answerBoxDivide = document.getElementById("answerbox-divided"); 
// reference needed DOM elements
// eslint-disable-next-line no-console

//validate


addButton.addEventListener('click', () => {

    const result = add (Number(plusNumberOne.value), Number(plusNumberTwo.value));
      answerBoxAdd.textContent = result;
})

subtractButton.addEventListener('click', () => {
 
  const result = subtract (Number(minusNumberOne.value), Number(minusNumberTwo.value));
    answerBoxSubtract.textContent = result;
 })

 //tried writing this code differently

 multiplyButton.addEventListener('click', () => {
  const x = Number(timesNumberOne.value);
  const y = Number (timesNumberTwo.value);
  const result = multiply (x, y);
    answerBoxTimes.textContent = result;
 })

 divideButton.addEventListener('click', () => {
  const x = Number(divNumberOne.value);
  const y = Number (divNumberTwo.value);
  const result = divide (x, y);
    answerBoxDivide.textContent = result;
 })




  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
