// This is for selecting elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

// and this is for starting the calculator state
let currentInput = "";
let operator = "";
let result = null;

// this is to add click event listeners to the buttons
buttons.forEach((button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
    
        if (!isNaN(buttonText) || buttonText === ".") {
            currentInput += buttonText;
            display.textContent = currentInput;
        }

        if ({"+", "-", "/"].includes(buttonText)) {
            operator = buttonText;
            if (currentInput !== "") {
                result = parseFloat(currentInput);
                currentInput = "";
            }
        }