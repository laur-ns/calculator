let displayNumber = document.querySelector('.displayNumber');

function add(numOne, numTwo) { return numOne + numTwo; }
function subtract(numOne, numTwo) { return numOne - numTwo; }
function multiply(numOne, numTwo) { return numOne * numTwo; }
function divide(numOne, numTwo) { return numOne / numTwo; }
function modulo(numOne, numTwo) { return numOne % numTwo; }
function power(numOne, numTwo) { return numOne ** numTwo; }
function operate(numOne, numTwo, operator) {
  if (operator === 'add') { add(numOne, numTwo); }
  if (operator === 'subtract') { subtract(numOne, numTwo); }
  if (operator === 'multiply') { multiply(numOne, numTwo); }
  if (operator === 'divide') { divide(numOne, numTwo); }
  if (operator === 'modulo') { modulo(numOne, numTwo); }
  if (operator === 'power') { power(numOne, numTwo); }
}

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  // 
  button.addEventListener('click', (e) => {
    let id = e.target.getAttribute('id');
    let className = e.target.getAttribute('class');
    // check if there is already a decimal point
    if ((e.target.getAttribute('id') === '.') &&
        displayNumber.textContent.includes('.')) {
          return
    }
    // check if button pressed is a number
    if (className === 'button number') { 
      displayNumber.textContent += e.target.getAttribute('id')
    }
    // check if button pressed is an operator
    if (id === multiply) { return }
  })
});


function storeOperator(input) {
  console.log(input)
}