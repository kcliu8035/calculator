const display = document.querySelector('.display');
let mainDisplay = document.querySelector('.mainDisplay');
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
const zeroBTN = document.getElementById('zeroBTN');

let firstInput = [];
let secondInput = [];
let calculation = [];
let operatorInput = [];
let counter = 0;
let operationActivated = false;
let operationsCounter = 0; 
let numberButtonClicked = false;
let equalsBTNActivated = false;


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        counter++;
        if (operationActivated) {
            mainDisplay.innerHTML = '';
        }
        operationActivated = false;
        numberButtonClicked = true;
        
        if(mainDisplay.textContent === '0') {
            mainDisplay.innerHTML = button.textContent;
        } else if(counter <= 15) {
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
        if(mainDisplay.textContent.length === 0) return;
        operationActivated = true;
        counter = 0;
        decimalBTN.disabled = false;
        // smallDisplay.innerHTML = `${firstInput} ${button.textContent}`
        // smallDisplay.innerHTML += `${mainDisplay.textContent} ${button.textContent}`
        // if (operationActivated && numberButtonClicked) {
        //     mainDisplay.innerHTML = '';
        // }
        
        console.log(`First: ${firstInput} \nSecond: ${secondInput} \nCalculation: ${calculation} \nCounter: ${operationsCounter}`);
       
    })  
})


//OPERATIONS FUNCTIONALITIES:
clearBTN.addEventListener('click', () => {
    counter = 0;
    operationsCounter = 0;
    decimalBTN.disabled = false;
    mainDisplay.innerHTML = '';
    smallDisplay.innerHTML = '';
    firstInput = [];
    secondInput = [];
    calculation = [];
});


deleteBTN.addEventListener('click', () => {
    mainDisplay.innerHTML = mainDisplay.textContent.slice(0, -1);
})

equalsBTN.addEventListener('click', () => {
        equalsBTNActivated = true;
        initiateCalculation(operatorInput);
})

decimalBTN.addEventListener('click', () => {
    decimalBTN.disabled = true;
})


function initiateCalculation(operator) {
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
    if(equalsBTNActivated) {
        secondInput = mainDisplay.textContent;
        // alert(`RESULT: ${calculation}, OPERATOR: ${operatorInput}, INPUT1: ${firstInput} INPUT2: ${secondInput}`);
        calculation = [operators[operatorInput](parseInt(firstInput), parseInt(secondInput))];
        mainDisplay.innerHTML = calculation;
        equalsBTNActivated = false;
        firstInput = [];
    } else if(firstInput.length > 0) {
        secondInput = mainDisplay.textContent;
        firstInput = [operators[operatorInput](parseInt(firstInput), parseInt(secondInput))];
        // alert(`RESULT: ${calculation}, OPERATOR: ${operatorInput}, INPUT1: ${firstInput} INPUT2: ${secondInput}`);
        mainDisplay.innerHTML = firstInput;
        secondInput = [];
    } else if(firstInput.length === 0) {
        firstInput = mainDisplay.textContent;
    }
    operatorInput = operator;     
}



//NOTES:
    //1) (DONE) Have Delete button delete numbers and numbers only.
    //2) (DONE) Need to figure out how to stop numbers from spilling out from display.  
    //3) (DONE) Include little display on calculator to show operations being used. 
    //4) (DONE) Figure out why Clear button stops anything from showing up again in display.
    //5) (DONE) Create math operation functions
    //6) Figure out how to have two arrays calculate properly as integers. 
    //7) firstInput is stored into array after operation button is clicked, and then secondInput is targeted.
            //Any operation click leads to calculation into calculation.
    //8 (DONE) Write out function for if firstInput exists, then secondInput is targetted. 
            //If both exist and then operation button is clicked again, then next set of numbers are stored into calculatedInput array
            //If user continues calculations without resetting, then calculatedInput takes firstInput's place and is calculated with secondInput
                //Which array do subsequent calculations then get stored? 
                //EX: If(calculatedInput = true ? firstInput = calculatedInput)
    //9)(DONE) Need to find out how to have function immediately calculate after second input is identified and operation button is clicked again
            // Problem seems to be in when the second input is stored into array. 
            // Calculation does occur at the proper time, but second array is still empty when it is activated. 
            // FIXED issue by moving storage of second input into the if function in initiateCalculation
                //Issue now is need to implement the stored operatorInput value into calculation.
    // 10) (DONE) Create seperate function for equals operator that takes storedOperator and calls initiateCalculation().
            //if (smallDisplay !== '') if it's not empy, execute calculation.
    // 11) Make sure 0 or symbols cannot be first input.
            // if(mainDisplay = '0' || 'operator') 
    // 12) Need to have it so only one operator can be chosen at a time. Currently, operationCounter can increment continuously. 
            // .includes(operator) return
    // 13) Need to use parseFloat when implementing decimals.
    // 14) .slice(0, -1) for delete operator
    // 15) to add commas, create function to return string as number (can parseFloat it first to account for decimals)
    // 16) for decimals, use .split() to split sequence on the decimal.
            // Look up maximumFractionDigits for other method to prevent more than one decimal.
            // Other method is to create function checking if current input contains a decimal and if not to add it to the input.

    //17) (DONE)Figure out booleans for when you click on operator and then clck on preceding number
            // Just changed order in which mainDisplay textContent was cleared
    //18) Problem with Equals button calculating firstInput and secondInput and storing it into secondInput:
            // secondInput is defined after clicking an operator
            

