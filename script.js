//initialize display value
Total = 0;
Value1 = 0;
Value2 = 0;
operation = "clear";
equalClick = 0

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
        case "add":
            return add(a,b);
        case "subtract":
            return subtract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        case "clear":
            return a;
    }
    
}

function updateDisplay(update){
    const display = document.querySelector('#displayRow');
    display.removeChild(display.firstChild);
    const displayValue = document.createElement("div");
    displayValue.textContent = update;
    display.appendChild(displayValue);

}

function clearCalculator(){
    updateDisplay("");
    Total = 0;
    Value1 = 0;
    Value2 = 0;
    equalClick = 0;
    operation = "clear";
}

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((numberButton)=>{
    numberButton.addEventListener("click", ()=>{
        console.info(numberButton.id);
        if(equalClick > 0){
            clearCalculator();
        }
        if(operation === "clear"){
        Value1 = Value1 * 10 + (numberButton.id * 1);
        console.info("Value1= " + Value1);
        updateDisplay(Value1);
        return;
        }
        else{
            Value2 = Value2 * 10 + (numberButton.id * 1);
            console.info("Value2= " + Value2);
            updateDisplay(Value2);
        }
    })
})

const operateButtons = document.querySelectorAll(".operate");
operateButtons.forEach((operateButton)=>{
    operateButton.addEventListener("click", ()=>{
        console.info("ID = " + operateButton.id);
        operation = operateButton.id
        Value2 = 0;
        equalClick = 0;
        console.info("operation = " + operation);
    })
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    Total = operate(operation, Value1, Value2);
    updateDisplay(Total);
    Value1 = Total;
    equalClick++;
});

const clearAllButton = document.querySelector(".clearAll");
clearAllButton.addEventListener("click", () => {
    updateDisplay("");
    Total = 0;
    Value1 = 0;
    Value2 = 0;
    equalClick = 0;
    operation = "clear";
});