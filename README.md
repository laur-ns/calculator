# TOP-calculator

Calculator for the odin project.

[Live Demo](https://laur-ns.github.io/TOP-calculator/)

### My initial plan for the calculator logic:

Add event listeners for each button, grouping them based on
what they do (e.g. operators and operands).

When a user presses button, an event is fired.
The id of the button is checked, if it's a number, append to display.
If it's an operator,  take the textContent of display and store it in
one variable. store the operator in another variable, place the current
numbers in the history display

When user inputs second operand into field, keep appending numbers till 
operator is pressed. Once it is, check if first operand variable is filled.
If it is, store into second operand variable.

Every operator should check if secondVar has been filled (not null), if it
is, run operate().

Operate() will take first variable, second variable, and operator, and run
the associated functions, and update the display with the solution. The
solution will then become first variable, waiting for second var again.
The operate() function will also take all three variables and store into
history display.




