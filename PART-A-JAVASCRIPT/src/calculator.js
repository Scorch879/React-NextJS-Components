// Simple Calculator - JavaScript Fundamentals Demo

// Variables
let firstNumber = '';
let operator = '';
let newNumber = false;
let expression = '';

// DOM Elements
const display = document.getElementById('display');

// Calculator Operations Object
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
};

// Functions
function appendNumber(num) {
    if (newNumber) {
        expression = expression + ' ' + num;
        display.textContent = expression;
        newNumber = false;
    } else {
        if (display.textContent === '0') {
            expression = num;
        } else {
            expression = expression + num;
        }
        display.textContent = expression;
    }
}

function setOperator(op) {
    if (firstNumber === '') {
        firstNumber = parseFloat(display.textContent);
        expression = firstNumber + ' ' + op;
    } else {
        expression = expression + ' ' + op;
    }
    operator = op;
    display.textContent = expression;
    newNumber = true;
}

function calculate() {
    if (!operator || newNumber) return;
    
    const numbers = expression.split(' ');
    const secondNumber = parseFloat(numbers[numbers.length - 1]);
    
    try {
        const result = operations[operator](firstNumber, secondNumber);
        display.textContent = Number.isInteger(result) ? result : result.toFixed(2);
        firstNumber = '';
        operator = '';
        newNumber = true;
        expression = '';
    } catch (error) {
        display.textContent = 'Error';
        firstNumber = '';
        operator = '';
        newNumber = true;
        expression = '';
    }
}

function clearDisplay() {
    display.textContent = '0';
    firstNumber = '';
    operator = '';
    newNumber = false;
    expression = '';
}

// Event Listeners
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        setOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
}); 