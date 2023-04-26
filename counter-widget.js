// Getting the HTML elements
const counterEl = document.getElementById("counter");
const plusBtn = document.getElementById("plus-btn");
const minusBtn = document.getElementById("minus-btn");
const resetBtn = document.getElementById("reset-btn");
const incrementInput = document.getElementById("increment-input");

// Setting the initial counter value and incrementing value
let counter = 0;
let increment = 1;

// Updating the counter value and displaying it
function updateCounter() {
  counterEl.textContent = counter;
}
