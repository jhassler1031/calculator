let calculation = [];
let $display = document.querySelector(".display-text");

function pushNumber() {
  number = parseInt(this.textContent, 10);
  calculation.push(number);
  $display.textContent = number;
}

let $numButton = document.querySelectorAll(".number-button");
for (let x = 0; x < $numButton.length; x++) {
  $numButton[x].addEventListener("click", pushNumber);
}

function pushOperator() {
  calculation.push(this.textContent);
  $display.textContent = this.textContent;
}

let $operator = document.querySelectorAll(".operator");
for (let x = 0; x < $operator.length; x++) {
  $operator[x].addEventListener("click", pushOperator);
}

function calculate() {
  let total = 0;

  for (let x = 0; x < calculation.length; x++) {

  }
}

let $equate = document.querySelector(".equate-button");
$equate.addEventListener("click", calculate);
