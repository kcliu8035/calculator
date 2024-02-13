const display = document.querySelector('.display');
const mainDisplay = document.querySelector('.mainDisplay');
const smallDisplay = document.querySelector('.smallDisplay');
const numberButtons = document.querySelectorAll('.numberButtons');
const operationButtons = document.querySelectorAll('.operationButton');
const deleteBTN = document.getElementById('delete')
const decimalBTN = document.getElementById('decimal');

//OPERATIONS BUTTONS:
const addBTN = document.getElementById('add');
const subtractBTN = document.getElementById('subtract');
const divideBTN = document.getElementById('divide');
const multiplyBTN = document.getElementById('multiply');
const equalsBTN = document.getElementById('equals');
const clearBTN = document.getElementById('clear');

let firstInput = [];
let secondInput = [];
let calculation = [];
let counter = 0;
let operationActivated = false;
let operationsCounter = 0; 


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        counter++;
        if(counter <= 15) {
            mainDisplay.innerHTML += button.textContent;
        }
        
        if(counter >= 10) {
            mainDisplay.style.fontSize = "3rem";
        } else {
            mainDisplay.style.fontSize = "4.5rem";
        }
    })
    
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        operationActivated = true;
        if(operationActivated && operationsCounter === 2) {
            initiateCalculation(firstInput, secondInput);
            operationsCounter = 0;
            firstInput = [];
            secondInput = [];
        }else if(operationActivated && operationsCounter === 1) {
            clearDisplay = true;
            secondInput = mainDisplay.textContent;
            operationsCounter++;
        } else if(operationActivated && operationsCounter === 0) {
            firstInput = mainDisplay.textContent;
            operationsCounter++;
            calculation = [];
        }
        // console.log(operationActivated);
        counter = 0;
        
        decimalBTN.disabled = false;
        smallDisplay.innerHTML += `${mainDisplay.textContent} ${button.textContent}`
        mainDisplay.innerHTML = '';
        console.log(`First: ${firstInput} \nSecond: ${secondInput} \nCalculation: ${calculation} \nCounter: ${operationsCounter}`);
       
    })  
})


//OPERATIONS FUNCTIONALITIES:
clearBTN.addEventListener('click', () => {
    counter = 0;
    decimalBTN.disabled = false;
    mainDisplay.innerHTML = '';
    smallDisplay.innerHTML = '';
    firstInput = [];
    secondInput = [];
    calculation = [];
});



function sum (a, b) {
    let input = a + b;
    let input2 = a + b + 2;
    firstInput.push(input);
    secondInput.push(input2)
    calculation.push(input + input2);
}

function initiateCalculation(input1, input2) {
    // mainDisplay.innerHTML += calculated
};



//NOTE: Had deleteBTN event listener nested in operationsButtons to target each button output
deleteBTN.addEventListener('click', () => {
    counter -= 1;
    console.log(counter);
    // mainDisplay.innerHTML += button.textContent.substring(-1, 1);
})

equalsBTN.addEventListener('click', () => {
    mainDisplay.innerHTML = calculation;
})

decimalBTN.addEventListener('click', () => {
   stopDecimal();
})

function stopDecimal() {
    decimalBTN.disabled = true;
}


function operations(operator) {
    var operators = {
        '+': function(a, b) {
            return a + b;
        },
        '-': function(a, b) {
            return a - b;
        },
        '*': function(a, b) {
            return a * b;
        },
        '/': function(a, b) {
            return a / b;
        },
    };
    console.log(operators[operator](firstInput, secondInput));
}



//NOTES:
    //1) Have Delete button delete numbers and numbers only.
    //2) (DONE) Need to figure out how to stop numbers from spilling out from display.  
    //3) (DONE) Include little display on calculator to show operations being used. 
    //4) (DONE) Figure out why Clear button stops anything from showing up again in display.
    //5) Create math operation functions
    //6) Figure out how to have two arrays calculate properly as integers. 
    //7) firstInput is stored into array after operation button is clicked, and then secondInput is targeted.
            //Any operation click leads to calculation into calculation.
    //8 Write out function for if firstInput exists, then secondInput is targetted. 
            //If both exist and then operation button is clicked again, then next set of numbers are stored into calculatedInput array
            //If user continues calculations without resetting, then calculatedInput takes firstInput's place and is calculated with secondInput
                //Which array do subsequent calculations then get stored? 
                //EX: If(calculatedInput = true ? firstInput = calculatedInput)

