// Step 1: Save the number that has been pressed

// Step 2: Save the operator that was pressed

// Step 3: Save the second number that was pressed

// Step 4: Equals sign is pressed, make calculation

let firstNumber;
let secondNumber;
let step = 0; // Variable to keep track of the step that we are on
let operation;
let result = 0;

const display = document.getElementById("display");
let numArray = []; // Create an array to keep track of all the buttons pressed.
// Every time we press a number, it will be inserted into this array for later.
let secondNumArray = [];

function getNumber(num) {
  if (step === 0 || step === 1) {
    numArray.push(num); // Numbers will be added into the array
    step = 1;
    firstNumber = Number(numArray.join("")); // Join all inputs into one Number
    display.value = firstNumber;
  } else if (step === 2) {
    // Same thing here but for the second number the user enters.
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(op) {
  step = 2;
  operation = op; // The operation that we passed in our HTML file
}

function clearDisplay() {
  display.value = 0;
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];
}

const calculateEquals = () => {
  if (operation === "+") {
    result = firstNumber + secondNumber;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
  }
  display.value = result;
};
