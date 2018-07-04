let calculation = [];
let $display = document.querySelector(".display-text");

// Function that gets called on click, is automatically passed "this" which is the DOM element that was clicked
function pushNumber() {
  number = parseInt(this.textContent, 10);
  calculation.push(number);
  $display.textContent = number;
}

// querySelectorAll returns an array
let $numButton = document.querySelectorAll(".number-button");
// Cycle through the list of DOM elements returned above and apply the event listener
for (let x = 0; x < $numButton.length; x++) {
  $numButton[x].addEventListener("click", pushNumber);
}

// Same above but for the operator buttons =====================================
function pushOperator() {
  calculation.push(this.textContent);
  $display.textContent = this.textContent;
}

let $operator = document.querySelectorAll(".operator");
for (let x = 0; x < $operator.length; x++) {
  $operator[x].addEventListener("click", pushOperator);
}

// Function to clear calculation and reset display when C button clicked =======
function clearAll() {
  calculation = [];
  $display.textContent = 0;
}

// Don't need the for loop here because it's just one element
let $clear = document.querySelector(".clear-button");
$clear.addEventListener("click", clearAll);

// Creating an OL with arithmetic operators as keys, their values being functions
//to perform the operator
var doMath = {
  "+": function(x, y) {return x + y},
  "-": function(x, y) {return x - y},
  "*": function(x, y) {return x * y},
  "/": function(x, y) {return x / y}
}

// Calculate function to perform all operations ================================
function calculate() {
  let total = 0;

  // Perform calculations ==========================
  for (let x = 0; x < calculation.length; x += 3) {
    total = doMath[calculation[x + 1]](calculation[x], calculation[x + 2]);
  }
  $display.textContent = total;
}

// Don't need the for loop here because it's just one element
let $equate = document.querySelector(".equate-button");
$equate.addEventListener("click", calculate);
