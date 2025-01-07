// Get the screen element
const screen = document.getElementById('screen');

// Initialize variables
let currentNumber = '';
let previousNumber = '';
let operation = '';

// Function to update the screen
function updateScreen(content) {
    screen.textContent = content;
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonId = event.target.id;

    // Handle number buttons
    const numberButtons = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    if (numberButtons.includes(buttonId)) {
        const number = buttonId.replace('zero', '0').replace('one', '1').replace('two', '2').replace('three', '3').replace('four', '4').replace('five', '5').replace('six', '6').replace('seven', '7').replace('eight', '8').replace('nine', '9');
        currentNumber += number;
        updateScreen(previousNumber + ' ' + operation + ' ' + currentNumber); // Display both numbers and operation
    }

    // Handle operation buttons
    const operationButtons = ['add', 'subtract', 'multiply', 'divide'];
    if (operationButtons.includes(buttonId)) {
        if (currentNumber !== '') {
            previousNumber = currentNumber;
            currentNumber = '';
            operation = buttonId.replace('add', '+').replace('subtract', '-').replace('multiply', '*').replace('divide', '/');
            updateScreen(previousNumber + ' ' + operation); // Display the first number and operation
        }
    }

    // Handle equals button
    if (buttonId === 'equals') {
        if (previousNumber !== '' && currentNumber !== '' && operation !== '') {
            const result = eval(previousNumber + operation + currentNumber);
            updateScreen(result);
            previousNumber = '';
            currentNumber = '';
            operation = '';
        }
    }

    // Handle clear button
    if (buttonId === 'clear') {
        currentNumber = '';
        previousNumber = '';
        operation = '';
        updateScreen('0');
    }

    // Handle backspace button
    if (buttonId === 'backspace') {
        currentNumber = currentNumber.slice(0, -1);
        updateScreen(previousNumber + ' ' + operation + ' ' + currentNumber); // Update screen after backspace
    }

    // Handle decimal button
    if (buttonId === 'decimal') {
        if (!currentNumber.includes('.')) {
            currentNumber += '.';
            updateScreen(previousNumber + ' ' + operation + ' ' + currentNumber); // Update screen with decimal
        }
    }
}

// Add event listeners
const buttons = document.querySelectorAll('.calc-button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});