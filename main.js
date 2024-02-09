// const nine = document.getElementById('nine');
// const eight = document.getElementById('eight');
// const seven = document.getElementById('seven');
// const six = document.getElementById('six');
// const five = document.getElementById('five');
// const four = document.getElementById('four');
// const three = document.getElementById('three');
// const two = document.getElementById('two');
// const one = document.getElementById('one');
// const zero = document.getElementById('zero');
const display = document.querySelector('.display');
const mainDisplay = document.querySelector('.mainDisplay');
const smallDisplay = document.querySelector('.smallDisplay');
const numberButtons = document.querySelectorAll('.numberButtons');
const operationButtons = document.querySelectorAll('.operationButton');


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        mainDisplay.innerHTML += button.textContent;
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        smallDisplay.innerHTML += `${mainDisplay.textContent} ${button.textContent}`
    })
})


//OPERATIONS BUTTONS:
const addBTN = document.getElementById('add');
const subtractBTN = document.getElementById('subtract');
const divideBTN = document.getElementById('divide');
const multiplyBTN = document.getElementById('multiply');
const equalsBTN = document.getElementById('equals');
const clearBTN = document.getElementById('clear');



//OPERATIONS FUNCTIONALITIES:
clearBTN.addEventListener('click', () => {
    display.innerHTML = '';
});


function sum (a, b) {
    return a + b;
}



//NOTES:
    //1) Figured out how to have every button be targeted without having to define each one. May need to have button variable for every group.
    //2) Need to figure out how to stop numbers from spilling out from display.  
    //3) Include little display on calculator to show operations being used. 
    //4) Figure out why Clear button stops anything from showing up again in display.
