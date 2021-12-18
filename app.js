let numberDisplay = document.querySelector('.numberDisplay');
let historyDisplay = document.querySelector('.history');
let operatorDisplay = document.querySelector('.operator');

let firstOperand = '';
let secondOperand = '';
let operator = '';

// -- functions
function add(numOne, numTwo) { return numOne + numTwo; }
function subtract(numOne, numTwo) { return numOne - numTwo; }
function multiply(numOne, numTwo) { return numOne * numTwo; }
function divide(numOne, numTwo) { return numOne / numTwo; }
function modulo(numOne, numTwo) { return numOne % numTwo; }
function power(numOne, numTwo) { return numOne ** numTwo; }
function operate(numOne, numTwo, operator) {
  console.log(numOne, numTwo, operator)
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
      if (firstOperand == '') {
        firstOperand = numberDisplay.textContent;
        operator = id;
        changeDisplay('main', id);
        return;
      }
      secondOperand = numberDisplay.textContent;
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