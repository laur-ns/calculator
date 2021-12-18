let numberDisplay = document.querySelector('.numberDisplay');
let historyDisplay = document.querySelector('.history');
let operatorDisplay = document.querySelector('.operator');

let firstOperand = '';
let secondOperand = '';
let operator = '';

const operations = {
add: function(numOne, numTwo) { return numOne + numTwo; },
subtract: function(numOne, numTwo) { return numOne - numTwo; },
multiply: function(numOne, numTwo) { return numOne * numTwo; },
divide: function(numOne, numTwo) { return numOne / numTwo; },
modulo: function(numOne, numTwo) { return numOne % numTwo; },
power: function(numOne, numTwo) { return numOne ** numTwo; },
};

// -- functions -- //
function operate(numOne, numTwo, operator) {
  numOne = parseInt(numOne);
  numTwo = parseInt(numTwo);
  firstOperand = operations[operator](numOne, numTwo);
  numberDisplay.textContent = firstOperand;
  secondOperand = '';
  // if (operator === 'add') { add(numOne, numTwo); }
  // if (operator === 'subtract') { subtract(numOne, numTwo); }
  // if (operator === 'multiply') { multiply(numOne, numTwo); }
  // if (operator === 'divide') { divide(numOne, numTwo); }
  // if (operator === 'modulo') { modulo(numOne, numTwo); }
  // if (operator === 'power') { power(numOne, numTwo); }
}
let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let id = e.target.getAttribute('id');
    let classes = e.target.getAttribute('class');
    // check if there is already a decimal point
    if ((id === '.') &&
        numberDisplay.textContent.includes('.')) {
      return;
    }
    // check if button pressed is a number
    if (classes === 'button number') { 
      numberDisplay.textContent += id;
    }
    // check if button pressed is an operator
    if (classes.includes('operator')) {
      if (firstOperand === '') {
        firstOperand = numberDisplay.textContent;
        operator = id;
        changeDisplay('main', id);
        return;
      }
      secondOperand = numberDisplay.textContent;
      if (secondOperand === '') { return }; 
      changeDisplay('main', id);
      operate(firstOperand, secondOperand, operator);
      operator = id;
    }
  })
});

function changeDisplay(displayType, operator) {
  let operatorSymbol =  document.querySelector(`#${operator}`).textContent;
  if (displayType === 'main') {
    operatorDisplay.textContent = operatorSymbol;
    historyDisplay = numberDisplay.textContent;
    numberDisplay.textContent = ' ';
  }
  if (displayType === 'all') {
    historyDisplay.textContent = ''
    numberDisplay.textContent = '';
    operatorDisplay.textContent = '';
  }
}