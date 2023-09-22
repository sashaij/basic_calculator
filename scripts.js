'use strict'

//bugs


const buttons = document.querySelector('.btn');
//display
let display = document.getElementById('curr-value');

//nums
const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnFour = document.getElementById('four');
const btnFive = document.getElementById('five');
const btnSix = document.getElementById('six');
const btnSeven = document.getElementById('seven');
const btnEight = document.getElementById('eight');
const btnNine = document.getElementById('nine');
const btnZero = document.getElementById('zero');
const btnPoint = document.getElementById('point');

//actions
const btnClear = document.getElementById('clear');
const btnDel = document.getElementById('delete');
const btnPosNeg = document.getElementById('pos-neg');

//operators
const btnAdd = document.getElementById('add');
const btnSubstract = document.getElementById('substract');
const btnMultiply = document.getElementById('multiply');
const btnDivide = document.getElementById('divide');
const btnEqual = document.getElementById('equal');


    let operator = '';

    //last digit input
    let currentDigit = 0; //
    //array to form number
    let displayValue = [0];
    //arr that holds operands
    let operands = [];

const operate = function (numbOne, numbTwo, oPerat) {
    if(oPerat === '+') {
        console.log('sum ' + add(numbOne, numbTwo));
        return operands[0] = add(numbOne, numbTwo);
    } else if (oPerat === '-') {
        console.log('diff ' + subtract(numbOne, numbTwo));
        return operands[0] = subtract(numbOne, numbTwo);
    } else if (oPerat === '*') {
        console.log('mult ' + multiply(numbOne, numbTwo));
        return operands[0] = multiply(numbOne, numbTwo);
    } else if (oPerat === '/') {
        console.log('div ' + divide(numbOne, numbTwo));
        return operands[0] = divide(numbOne, numbTwo);
    }
  }

    const add = function(a, b) {
        return a + b;
    };

    const subtract = function(a, b) {
        return a - b;
    };

    const multiply = function(num1, ...nums) {
        let mult = num1;  
        nums.forEach(num => {
        mult *= num;
    })
    return mult;
    };

    const divide = function (numb1, ...numbs) {
        //returns error when dividing by zero
        if (numbs === 0) {
            displayValue = [0];
            return display.textContent = 'Error';
        }
        let divi = numb1;  
        numbs.forEach(num => {
        divi /= num;
    })
    return divi;
    }

    const displayFill = function () {
        if (displayValue[0] === 0 & displayValue[1] !== '.') {
            //replace first item with current digit
            displayValue.splice(0, 1, currentDigit);
        } else {
            displayValue.push(currentDigit);
        }
        display.textContent = displayValue.join(''); 
    }

    const deletePoint = function () {
        if (displayValue[displayValue.length - 1] === '.') {
            displayValue.pop();
            display.textContent = displayValue.join('');
        }
    }

    const displayEverything = function () {
        console.log('operands: ' + operands);
        console.log('operands lenght: ' + operands.length);
        console.log('operator: ' + operator);
        console.log('display-value: ' + displayValue);
        console.log('display-text-content: ' + display.textContent);
        console.log('---------------------------------');
    }

    const result = function () {
        operands.push(Number(displayValue.join('')));
        displayValue = [0];
        operate(operands[0], operands[1], operator);
        display.textContent = operands[0];
    }

    const enableOperator = function () {
        btnMultiply.disabled = false;
        btnAdd.disabled = false;
        btnSubstract.disabled = false;
        btnDivide.disabled = false; 
    }

    const disableDel = function () {
        if (operands[0].isInteger() === false &&
         operands.length > 0) {
            btnDel.disabled = true;
        }
    }

    //key functions
    const allKeys = function () {
        displayFill();
        enableOperator();
        displayEverything();
    }

    const actionPoint = function () {
        if (operator !== '') {
            if (display.textContent.includes('.')) {
                return
            }
            currentDigit = '.';
            displayValue.push(currentDigit);
            display.textContent = displayValue.join('');
            btnPoint.disabled = true;
            displayEverything();
        } else {
            if (display.textContent.includes('.')) {
                return
            }
            currentDigit = '.';
            displayValue.push(currentDigit);
            display.textContent = displayValue.join('');
            btnPoint.disabled = true;
            console.log(displayValue + ' point') ;
            displayEverything();
        }
    }

    const actionDelete = function () {
        displayValue.pop();
        //make current value 0 so it would not
        //dissapear from the screen 
        if (displayValue.length === 1 && displayValue[0] === '-') {
            displayValue = [0];
            display.textContent = displayValue.join[''];
        }
        if (displayValue.length < 1) {
            displayValue = [0];
            display.textContent = displayValue[0];
        } else {
          display.textContent = displayValue.join('');
        }
            //zero operans if there is only one char displayed
        if(displayValue.length === 1) {
            operands = [];
        }
        displayValue.includes('.') ? btnPoint.disabled = true : btnPoint.disabled = false;
        shrinkFont();
        console.log(displayValue + ' del') ;
        displayEverything();
    }

    const shrinkFont = function () {
        if (display.textContent.length > 12 && display.textContent.length < 24) {
          display.style.fontSize = '1rem'
        } else if (display.textContent.length > 24) {
          display.style.fontSize = '.5rem';
        } else if (display.textContent.length < 12) {
          display.style.fontSize = '2rem';
        }
      }


    const actionAdd = function () {
        btnAdd.classList.add('active');
        btnSubstract.classList.remove('active');
        btnMultiply.classList.remove('active');
        btnDivide.classList.remove('active');

        if (operator !== '+' && operands.length === 1) {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operate(operands[0], operands[1], operator);
            display.textContent = operands[0];
            operands.pop();
            operator = '+';
        } else if (operator === '+' & operands.length === 1) {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operate(operands[0], operands[1], operator);
            display.textContent = operands[0];
            operands.pop();
        } else {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operator = '+';
        }

        btnPoint.disabled = false;
        deletePoint();
        displayEverything();
        shrinkFont();
    }

    const actionSubstract = function () {
        btnSubstract.classList.add('active');
    btnAdd.classList.remove('active');
    btnMultiply.classList.remove('active');
    btnDivide.classList.remove('active');

    if (operator !== '-' && operands.length === 1) {
        operands.push(Number(displayValue.join('')));
        displayValue = [0];
        operate(operands[0], operands[1], operator);
        display.textContent = operands[0];
        operands.pop();
        operator = '-';
    } else if (operator === '-' & operands.length === 1) {
        operands.push(Number(displayValue.join('')));
        displayValue = [0];
        operate(operands[0], operands[1], operator);
        display.textContent = operands[0];
        operands.pop();
    } else {
        operands.push(Number(displayValue.join('')));
        displayValue = [0];
        operator = '-';
    }
    
    btnPoint.disabled = false;
    deletePoint();
    displayEverything();
    shrinkFont();
    }

    const actionMultiply = function () {
        btnMultiply.classList.add('active');
        btnSubstract.classList.remove('active');
        btnAdd.classList.remove('active');
        btnDivide.classList.remove('active');
        
        if (operator !== '*' && operands.length === 1) {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operate(operands[0], operands[1], operator);
            display.textContent = operands[0];
            operands.pop();
            operator = '*';
        } else if (operator === '*' & operands.length === 1) {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operate(operands[0], operands[1], operator);
            display.textContent = operands[0];
            operands.pop();
        } else {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operator = '*';
        }
        
        btnPoint.disabled = false;
        deletePoint();
        displayEverything();
        shrinkFont();
    }

    const actionDivide = function () {
        btnDivide.classList.add('active');
        btnSubstract.classList.remove('active');
        btnMultiply.classList.remove('active');
        btnAdd.classList.remove('active');

        if (operator !== '/' && operands.length === 1) {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operate(operands[0], operands[1], operator);
            display.textContent = operands[0];
            operands.pop();
            operator = '/';
        } else if (operator === '/' & operands.length === 1) {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operate(operands[0], operands[1], operator);
            display.textContent = operands[0];
            operands.pop();
        } else {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operator = '/';
        }
        
        btnPoint.disabled = false;
        deletePoint();
        displayEverything();
        shrinkFont();
    }

    const actionEqal = function () {
        if (operands.length === 0) {
            return
        } else if (displayValue === 0) {
            return
        } else if (operands.length === 1) {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operate(operands[0], operands[1], operator);
            display.textContent = operands[0];
            operands.pop();
            operator = '';
        } else {
            operands.push(Number(displayValue.join('')));
            displayValue = [0];
            operator = '';
        }
        shrinkFont();
    }

    //key inputs
    window.addEventListener('keydown', (event) => {
        if (event.key === '1') {
            event.preventDefault();
            currentDigit = 1;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '2') {
            event.preventDefault();
            currentDigit = 2;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '3') {
            event.preventDefault();
            currentDigit = 3;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '4') {
            event.preventDefault();
            currentDigit = 4;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '5') {
            event.preventDefault();
            currentDigit = 5;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '6') {
            event.preventDefault();
            currentDigit = 6;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '7') {
            event.preventDefault();
            currentDigit = 7;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '8') {
            event.preventDefault();
            currentDigit = 8;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '9') {
            event.preventDefault();
            currentDigit = 9;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '0') {
            event.preventDefault();
            currentDigit = 0;
            displayFill();
            enableOperator();
            displayEverything();
            shrinkFont();
        } else if (event.key === '+') {
            event.preventDefault();
            actionAdd();
            shrinkFont();
        } else if (event.key === '-') {
            event.preventDefault();
            actionSubstract();
            shrinkFont();
        } else if (event.key === '*') {
            event.preventDefault();
            actionMultiply();
            shrinkFont();
        } else if (event.key === '/') {
            event.preventDefault();
            actionDivide();
            shrinkFont();
        } else if (event.key === 'Backspace' || event.key === 'Delete') {
            event.preventDefault();
            actionDelete();
            shrinkFont();
        } else if (event.key === 'Enter') {
            event.preventDefault();
            actionEqal();
            shrinkFont();
        } else if (event.key === '.') {
            event.preventDefault();
            actionPoint();
            shrinkFont();
        } 

    })

    window.addEventListener('keydown', (event) => {
        console.log(event);
    })

    //input
      btnOne.addEventListener('click', () => {
        currentDigit = 1;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnTwo.addEventListener('click', () => {
        currentDigit = 2;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnThree.addEventListener('click', () => {
        currentDigit = 3;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnFour.addEventListener('click', () => {
        currentDigit = 4;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnFive.addEventListener('click', () => {
        currentDigit = 5;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnSix.addEventListener('click', () => {
        currentDigit = 6;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnSeven.addEventListener('click', () => {
        currentDigit = 7;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnEight.addEventListener('click', () => {
        currentDigit = 8;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnNine.addEventListener('click', () => {
        currentDigit = 9;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });
      btnZero.addEventListener('click', () => {
        currentDigit = 0;
        displayFill();
        enableOperator();
        displayEverything();
        shrinkFont();
      });

      btnPoint.addEventListener('click', () => {
        actionPoint();
        shrinkFont();
      })

      btnDel.addEventListener('click', () => {
        actionDelete();
        shrinkFont();
      });
      btnClear.addEventListener('click', () => {
        currentDigit = 0;
        displayValue = [0];
        display.textContent = 0;
        operator = '';
        btnPoint.disabled = false;
        display.style.fontSize = '2rem';
        console.log(displayValue + ' clear') ;
        operands = [];
        displayEverything();
        shrinkFont();
      });



//highlight operator buttton
//being clicked



  btnAdd.addEventListener('click', () => {
    actionAdd();
  });


  btnSubstract.addEventListener('click', () => {
    actionSubstract();
  });

  btnMultiply.addEventListener('click', () => {
    actionMultiply();
  });

  btnDivide.addEventListener('click', () => {
    actionDivide();
  });

  btnEqual.addEventListener('click', () => {
    actionEqal();
  })
  
 
