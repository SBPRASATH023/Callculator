const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        let expression = display.value;

        // Replace symbols if needed
        expression = expression.replace(/×/g, "*");
        expression = expression.replace(/÷/g, "/");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";

        setTimeout(() => {
            display.value = "";
        }, 1000);
    }
}

// ============================
// Keyboard Support
// ============================

document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (["+", "-", "*", "/", "%", "."].includes(key)) {
        appendValue(key);
    }

    // Enter = Calculate
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = Delete
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    else if (key === "Escape") {
        clearDisplay();
    }
});