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

/**
 * Обработка нажатия кнопок и вычисления.
 * @param {Event} event Событие клика по кнопке.
 */
export function handleButtonClick(event) {
    const value = event.target.textContent;

    if (!event.target.classList.contains('calc__button')) return;

    if (value === 'C') {
        currentInput = '';
        display.textContent = '';
        return;
    }

    if (value === '=') {
        try {
            currentInput = calculateExpression(currentInput);
            display.textContent = currentInput;
            console.log("Result is: " + currentInput);
            shouldClear = true;
        } catch {
            display.textContent = 'Error';
            currentInput = '';
        }
        return;
    }

    if (value === '←') {
        if (currentInput) {
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
}
/**
 * Вывод 123 в консоль
 * @param {Event} event Выводит 123 в консоль при вызове.
 */
function log123 () {
    console.log('123');
}
buttonsContainer.addEventListener('click', handleButtonClick);