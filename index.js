const display = document.querySelector('.calc__display');
const buttonsContainer = document.querySelector('.calc__buttons');

const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
];

buttons.forEach(text => {
    const btn = document.createElement('button');
    btn.classList.add('calc__button');
    btn.textContent = text;
    buttonsContainer.appendChild(btn);
});