displayNumber = document.querySelector('.displayNumber');

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
  button.addEventListener('click', (e) => {
    id = e.target.getAttribute('class');
    if (id === 'button number') { 
      displayNumber.textContent += e.target.getAttribute('id')
    }
  })
});


function storeOperator(input) {
  console.log(input)
}