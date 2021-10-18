

const displayValueCurrent = document.getElementById('v-current');
const displayValuePrevious = document.getElementById('v-previous');
const buttonsNumber = document.querySelectorAll('.number');
const buttonsOperations = document.querySelectorAll('.operator');

const display = new Display(displayValuePrevious, displayValueCurrent);

buttonsNumber.forEach(but => {
    but.addEventListener('click', () => display.addNumber(but.innerHTML) );
})

buttonsOperations.forEach(but => {
    but.addEventListener('click', () =>display.computar(but.value));
})

