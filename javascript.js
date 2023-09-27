// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

// Initialize the calculator state
let currentInput = "";
let operator = "";
let result = null;

// Add click event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;

    // Handle numeric buttons
    if (!isNaN(buttonText) || buttonText === ".") {
      currentInput += buttonText;
      display.textContent = currentInput;
    }

    // Handle operator buttons
    if (["+", "-", "*", "/"].includes(buttonText)) {
      operator = buttonText;
      if (currentInput !== "") {
        result = parseFloat(currentInput);
        currentInput = "";
      }
    }

    // Handle equals button
    if (buttonText === "=") {
      if (currentInput !== "") {
        const secondOperand = parseFloat(currentInput);
        switch (operator) {
          case "+":
            result += secondOperand;
            break;
          case "-":
            result -= secondOperand;
            break;
          case "*":
            result *= secondOperand;
            break;
          case "/":
            if (secondOperand !== 0) {
              result /= secondOperand;
            } else {
              display.textContent = "Error";
              return;
            }
            break;
        }
        display.textContent = result;
        currentInput = "";
      }
    }

    // Handle clear button
    if (buttonText === "C") {
      currentInput = "";
      operator = "";
      result = null;
      display.textContent = "0";
    }
  });
});
