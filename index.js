import { calculateExpression } from "./calculateExpression.js";
const display = document.querySelector('.calc__display');
const buttonsContainer = document.querySelector('.calc__buttons');

const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+', '←'
];

buttons.forEach(text => {
    const btn = document.createElement('button');
    btn.classList.add('calc__button');
    btn.textContent = text;
    buttonsContainer.appendChild(btn);
});

let currentInput = '';
let shouldClear = false;

buttonsContainer.addEventListener('click', (event) => {
    if (!event.target.classList.contains('calc__button')) return;

    const value = event.target.textContent;

    if (value === 'C') {
        currentInput = '';
        display.textContent = '';
        return;
    }

    if (value === '=') {
        try {
            currentInput = calculateExpression(currentInput);
            display.textContent = currentInput;
            shouldClear = true;
        } catch {
            display.textContent = 'Error';
            currentInput = '';
        }
        return;
    }
    if (value === '←') {
        if (currentInput) {
            // удаляем последний символ
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput;
        }
        return;
    }
    if (shouldClear && /[0-9]/.test(value)) {
        currentInput = value;
        display.textContent = currentInput;
        shouldClear = false;
        return;
    }

    shouldClear = false;
    currentInput += value;
    display.textContent = currentInput;
});