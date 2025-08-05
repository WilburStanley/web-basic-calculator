// INPUT FIELD
const inputElement = document.getElementById("input_num");
// BTN FUNCTIONS
const ac_btn = document.getElementById("ac_btn");
const negative_btn = document.getElementById("negative_btn");
const percentage_btn = document.getElementById("percent_btn");
const decimalPoint_btn = document.getElementById("decimalPoint_btn")
const backspace_btn = document.getElementById("backspace_btn");
// BTN NUMBERS
const number_btn = document.getElementsByClassName("number-btn");
// OPERATORS
const division_btn = document.getElementById("division_btn");
const multiplication_btn = document.getElementById("multiplication_btn");
const subtraction_btn = document.getElementById("subtraction_btn");
const addition_btn = document.getElementById("addition_btn");
const equal_btn = document.getElementById("equal_btn");

ac_btn.addEventListener("click", () => {
    inputElement.value = "";
});

let currentInput = "";
let previousInput = "";
let operator = "";

function updateInput() {
    inputElement.value = currentInput;
}

for (let i = 0; i < number_btn.length; i++) {
    number_btn[i].addEventListener("click", (event) => {
        currentInput += event.currentTarget.dataset.value;
        updateInput();
    })
}

backspace_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        currentInput = currentInput.slice(0, -1);
        updateInput();
    }
});

percentage_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        operator = "%";
        currentInput = "";
        updateInput();
    }
});

division_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "/";
    }
});

multiplication_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "*";
    }
});

subtraction_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "-";
    }
});

addition_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        previousInput = currentInput;
        currentInput = "";
        operator = "+";
    }
});

equal_btn.addEventListener("click", () => {
    if (currentInput !== "" && previousInput !== "") {
        switch (operator) {
            case "/":
                currentInput = String(Number(previousInput) / Number(currentInput));
                break;
            case "*":
                currentInput = String(Number(previousInput) * Number(currentInput));
                break;
            case "-":
                currentInput = String(Number(previousInput) - Number(currentInput));
                break;
            case "+":
                currentInput = String(Number(previousInput) + Number(currentInput));
                break;
            case "%":
                currentInput = String(Number(previousInput) * (Number(currentInput) / 100));
                break;
        }
        previousInput = "";
        operator = "";
        updateInput();
    }
});


ac_btn.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateInput();
});

percentage_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        let current = Number(currentInput);

        if (previousInput !== "" && operator) {
            current = Number(previousInput) * (current / 100);
        } else {
            current = current / 100;
        }

        currentInput = String(current);
        updateInput();
    }
});

negative_btn.addEventListener("click", () => {
    if (currentInput !== "") {
        currentInput = String(-Number(currentInput));
        updateInput();
    }
});