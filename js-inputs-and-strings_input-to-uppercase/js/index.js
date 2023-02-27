console.clear();

const inputElement = document.querySelector('[data-js="first-input"]');
const buttonElement = document.querySelector('[data-js="button-uppercase"]');



buttonElement.addEventListener("click", () => {
// event.preventDefault();

const input = inputElement.value; // grabbing the value of the element//
const upperCase = input.toUpperCase(); // transforming the value //
inputElement.value=upperCase; //redefining the value with the desired output value//





})

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
