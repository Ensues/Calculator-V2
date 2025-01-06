// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === 'Error' || display.value === 'undefined') {
        clearDisplay();
    }
    display.value += value;
}

// Remove the last character from the display
function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression
function calculate() {
    const display = document.getElementById('display');
    try {
        // Evaluate the expression
        let result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}