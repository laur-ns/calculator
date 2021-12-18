// -- Declarations -- //
let numberDisplay = document.querySelector('.numberDisplay');
let historyDisplay = document.querySelector('.history');
let operatorDisplay = document.querySelector('.operator');
let clearDisplayOnInput = false;
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
}


// -- Functions -- //
function operate(numOne, numTwo, operator) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  if (operator === 'equals') {
    changeDisplay('clearMain')
  }
  changeDisplay('showEquation', operator);
  firstOperand = operations[operator](numOne, numTwo);
  numberDisplay.textContent = firstOperand;
  clearDisplayOnInput = true;
  secondOperand = '';
}
function changeDisplay(displayType, operator) {
  let operatorSymbol =  document.querySelector(`#${operator}`).textContent;
  if (operator === 'power') { operatorSymbol = '^'; }
  if (displayType === 'clearMain') {
    operatorDisplay.textContent = operatorSymbol;
    historyDisplay.textContent = firstOperand;
    numberDisplay.textContent = '';
  }
  if (displayType === 'clearAll') {
    historyDisplay.textContent = ''
    numberDisplay.textContent = '';
    operatorDisplay.textContent = '';
  }
  if (displayType === 'showEquation') {
    historyDisplay.textContent = `${firstOperand} ${operatorSymbol} ${secondOperand}`;
  }
}


// -- Add event listeners --//
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
      if (operator === 'equals') {
        firstOperand = '';
        changeDisplay('clearAll', operator);
      }
      if (clearDisplayOnInput) {
        numberDisplay.textContent = '';
        clearDisplayOnInput = false;
        secondOperand = '';
      }
      numberDisplay.textContent += id;
    }

    // check if button pressed is an operator
    if (classes.includes('operator')) {
      if (clearDisplayOnInput) {
        operator = id;
        changeDisplay('clearMain', id);
        return;
      }
      if (firstOperand === '') {
        firstOperand = numberDisplay.textContent;
        operator = id;
        changeDisplay('clearMain', id);
        return;
      }
      secondOperand = numberDisplay.textContent;
      if (secondOperand === '') {
        changeDisplay('clearMain', id)
        return;
      };  
      changeDisplay('clearMain', id);
      operate(firstOperand, secondOperand, operator);
      operator = id;
    }
  })
});