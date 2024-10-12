//initialze display value
const total = 0;

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate (operator, a, b){
    switch (operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
    
}

function updateDisplay(update){
    const display = document.querySelector('#displayRow');
    display.removeChild(display.firstChild);
    const displayValue = document.createElement("div");
    displayValue.textContent = update;
    display.appendChild(displayValue);

}
