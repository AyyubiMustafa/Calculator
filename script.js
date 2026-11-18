// 1. Select the screen and all buttons (buttons acts like an array)
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

// 2. Variables and an Array to store the calculation
let currentInput = "";
let calculation = []; // Example: ["12", "+", "5"]

// 3. Loop through the buttons array to add click events
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let value = buttons[i].innerText;

        // Clear button
        if (value === "C") {
            currentInput = "";
            calculation = [];
            display.value = "";
        }
        // Operator buttons (+, -, *, /)
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput !== "") {
                calculation.push(currentInput); // Save the first number to the array
                calculation.push(value);        // Save the operator to the array
                currentInput = "";              // Reset for the next number
                display.value = value;
            }
        }
        // Equals button (=)
        else if (value === "=") {
            if (currentInput !== "" && calculation.length === 2) {
                calculation.push(currentInput); // Save the second number to the array
                let result = calculateResult(calculation);
                display.value = result;

                // Reset array so you can keep calculating with the result
                currentInput = result.toString();
                calculation = [];
            }
        }
        // Number buttons (0-9)
        else {
            currentInput = currentInput + value;
            display.value = currentInput;
        }
    });
}

// 4. Function to do the math using the array items
function calculateResult(arr) {
    let num1 = Number(arr[0]);
    let operator = arr[1];
    let num2 = Number(arr[2]);

    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Error";
        }
        return num1 / num2;
    }
}
