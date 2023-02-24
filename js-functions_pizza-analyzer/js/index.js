console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

/* Cleaner alternative
 
function updatedGain() {
let pizzaSize1 = +pizzaInput1.value
 let pizzaSize2 = +pizzaInput2.value
 calculatePizzaGain(pizzaSize1,pizzaSize2)

}

Now in both eventlisteners you could change the paramenters:

pizzaInput1.addEventListener("input", updatedGain);

or

pizzaInput1.addEventListener("input", () => {
  updatedGain()

}


 */


pizzaInput1.addEventListener("input", () => {
 let pizzaSize1 = +pizzaInput1.value
 let pizzaSize2 = +pizzaInput2.value
 calculatePizzaGain(pizzaSize1,pizzaSize2)
 updatePizzaDisplay(pizza1, pizzaInput1.value)
 

 
  
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = +pizzaInput1.value
  let pizzaSize2 = +pizzaInput2.value
  calculatePizzaGain(pizzaSize1,pizzaSize2)
  updatePizzaDisplay(pizza2, pizzaInput2.value)
  // write your code here
})

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * Math.pow(diameter1 / 2, 2)
  const area2 = Math.PI * Math.pow(diameter2 / 2, 2)
  const gain = ((area2 - area1) /area1*100);
  output.textContent = Math.round(gain)


}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  let newDisplay = newSize / 24 * 100; 
  pizzaElement.style.width = +newDisplay + "px";

  
  // write your code here
}

// Task 3

function updateOutputColor(size1, size2) {
  // write your code here
}
