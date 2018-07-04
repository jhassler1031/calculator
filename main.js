
let calculation = [];
let $display = document.querySelector(".display-text");
let multiDigit = "";
let equalsPrior = false;

// Function that gets called on click, is automatically passed "this" which is the DOM element that was clicked
function getNumber() {
  if (equalsPrior) {
    clearAll();
  }
  number = this.textContent;
  multiDigit += number;
  $display.textContent = multiDigit;
  //= was not the last key hit so resetting this
  equalsPrior = false;
}

// querySelectorAll returns an array
let $numButton = document.querySelectorAll(".number-button");
// Cycle through the list of DOM elements returned above and apply the event listener
for (let x = 0; x < $numButton.length; x++) {
  $numButton[x].addEventListener("click", getNumber);
}

// Function to push the multiDigit number to the calculation list ==============
function pushNumber() {
  calculation.push(parseFloat(multiDigit, 10));
  multiDigit = "";
}

// Same above but for the operator buttons =====================================
function pushOperator() {
  // Call pushNumber to push the multiDigit number to calculations
  // pushNumber needs to be called first, otherwise the operator gets put in the wrong place
  if (multiDigit.length > 0) {
    pushNumber();
  }
  else {
    // In case no numbers have been entered yet, default to the first number being 0
    multiDigit = "0";
    pushNumber();
  }
  calculation.push(this.textContent);
  $display.textContent = this.textContent;
  //= was not the last key hit so resetting this
  equalsPrior = false;
}

let $operator = document.querySelectorAll(".operator");
for (let x = 0; x < $operator.length; x++) {
  $operator[x].addEventListener("click", pushOperator);
}

// Function to clear calculation and reset display when C button clicked =======
function clearAll() {
  calculation = [];
  $display.textContent = 0;
  multiDigit = "";
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
  // Do a push of the last multiDigit number
  pushNumber();

  let total = 0;
  let num1 = 0;
  let num2 = 0;
  let operator = "";

  // Perform calculations ==========================
  for (let x = 1; x < calculation.length; x += 2) {
    // X at 1 is a special case.  Operators will be odd indices, numbers on even.
    //By starting x at 1, you can increment by two jumping to each operators
    //On the first pass you just grab the first number
    if (x === 1) {
      num1 = calculation[x - 1];
    }
    num2 = calculation[x + 1];
    operator = calculation[x];
    total = doMath[operator](num1, num2);
    num1 = total;
  }
  $display.textContent = total;
  equalsPrior = true;
}

// Don't need the for loop here because it's just one element
let $equate = document.querySelector(".equate-button");
$equate.addEventListener("click", calculate);

// Adding the positive/negative button =========================================
function switchNumber() {
  if (multiDigit[0] === "-") {
    multiDigit = multiDigit.slice(1);
  }
  else {
    multiDigit = "-" + multiDigit;
  }
  $display.textContent = multiDigit;
}

let $posNeg = document.querySelector(".positive-negative");
$posNeg.addEventListener("click", switchNumber);
