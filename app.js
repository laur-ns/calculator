let numberDisplay = document.querySelector('.numberDisplay');
let historyDisplay = document.querySelector('.history');
let operatorDisplay = document.querySelector('.operator');
let displayToggle = false; // determines whether to clear display on input

let firstOperand = '';
let secondOperand = '';
let operator = '';

const operations = {
add: (numOne, numTwo) => { return numOne + numTwo; },
subtract: (numOne, numTwo) => { return numOne - numTwo; },
multiply: (numOne, numTwo) => { return numOne * numTwo; },
divide: (numOne, numTwo) => { return numOne / numTwo; },
modulo: (numOne, numTwo) => { return numOne % numTwo; },
power: (numOne, numTwo) => { return numOne ** numTwo; },
// equals: (
};

// -- functions -- //
function operate(numOne, numTwo, operator) {
  numOne = parseInt(numOne);
  numTwo = parseInt(numTwo);
  firstOperand = operations[operator](numOne, numTwo);
  numberDisplay.textContent = firstOperand;
  displayToggle = true;
  secondOperand = '';
  console.log(operator);
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
      if (displayToggle) {
        numberDisplay.textContent = '';
        displayToggle = false;
      }
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