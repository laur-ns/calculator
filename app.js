
function add(numOne, numTwo) {
  return numOne + numTwo;
}
function subtract(numOne, numTwo) {
	return numOne - numTwo;
}
function multiply(numOne, numTwo) {
  return numOne * numTwo;
}
function divide(numOne, numTwo) {
  return numOne / numTwo;
}
function modula(numOne, numTwo) {
  return numOne % numTwo;
}
function power(numOne, numTwo) {
  return numOne ** numTwo;
}
function operate(numOne, numTwo, operator) {
  if (operator === 'add') { add(numOne, numTwo); }
  if (operator === 'subtract') { subtract(numOne, numTwo); }
  if (operator === 'multiply') { multiply(numOne, numTwo); }
  if (operator === 'divide') { divide(numOne, numTwo); }
  if (operator === 'modula') { modula(numOne, numTwo); }
  if (operator === 'power') { power(numOne, numTwo); }
}