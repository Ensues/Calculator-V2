function clearDisplay() {
    document.getElementById('display').value = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if(display.value === 'Error' || display.value === 'undefined') {
        clearDisplay();
    }else if(display.value === '0'){
        display.value = '';
    }
    display.value += value;
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if(display.value === ''){
        display.value = '0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    try{
        let result = eval(display.value);
        display.value = result;
    }catch (error) {
        display.value = 'Error';
    }
}