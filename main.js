const nine = document.getElementById('nine');
const eight = document.getElementById('eight');
const seven = document.getElementById('seven');
const six = document.getElementById('six');
const five = document.getElementById('five');
const four = document.getElementById('four');
const three = document.getElementById('three');
const two = document.getElementById('two');
const one = document.getElementById('one');
const zero = document.getElementById('zero');

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numberButtons');
const clearBTN = document.getElementById('clear');

nine.addEventListener('click', () =>{
    display.innerHTML += nine.textContent;
})

eight.addEventListener('click', () =>{
    display.innerHTML += eight.textContent;
})

clearBTN.addEventListener('click', () => {
    display.innerHTML = '';
});
