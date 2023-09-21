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

    let operandOne = 0;
    let operandTwo = 0;
    let operator = '';

    let currentDigit = 0; //
    let displayValue = [0];
    let operands = [];

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


    //input
      btnOne.addEventListener('click', () => {
        currentDigit = 1;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnTwo.addEventListener('click', () => {
        currentDigit = 2;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnThree.addEventListener('click', () => {
        currentDigit = 3;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnFour.addEventListener('click', () => {
        currentDigit = 4;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnFive.addEventListener('click', () => {
        currentDigit = 5;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnSix.addEventListener('click', () => {
        currentDigit = 6;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnSeven.addEventListener('click', () => {
        currentDigit = 7;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnEight.addEventListener('click', () => {
        currentDigit = 8;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnNine.addEventListener('click', () => {
        currentDigit = 9;
        displayFill();
        enableOperator();
        displayEverything();
      });
      btnZero.addEventListener('click', () => {
        currentDigit = 0;
        displayFill();
        enableOperator();
        displayEverything();
      });

      btnPoint.addEventListener('click', () => {
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

      })

      btnDel.addEventListener('click', () => {
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
        //shrinkFont();
        //---------------
        console.log(displayValue + ' del') ;
        displayEverything();
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
      });

          //toggle between positive and negative numbers
        btnPosNeg.addEventListener('click', () => {
        if(displayValue[0] === '-') {
          displayValue.splice(0, 1);
          display.textContent = displayValue.join('');
        } else if (displayValue[0] === 0 && operands.length < 1) {
          displayValue = [0];
          display.textContent = displayValue.join('');
        } else {
          if (displayValue.length > 0 && 
              displayValue[0] !== 0) {
              displayValue.unshift('-');
          }
          display.textContent = displayValue.join('');
        }
        deletePoint();
        console.log(displayValue + ' pos/neg') ;
        //shrinkFont();
        displayEverything();
      })
    

//highlight operator buttton
//being clicked



    btnAdd.addEventListener('click', () => {
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
  
/*         btnAdd.disabled = true;
        btnSubstract.disabled = false;
        btnMultiply.disabled = false;
        btnDivide.disabled = false;  */

        btnPoint.disabled = false;
        deletePoint();
        displayEverything();
  });


  btnSubstract.addEventListener('click', () => {
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
/*     btnSubstract.disabled = true;
    btnAdd.disabled = false;
    btnMultiply.disabled = false;
    btnDivide.disabled = false;  */
  });

  btnMultiply.addEventListener('click', () => {
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
/*     btnMultiply.disabled = true;
    btnAdd.disabled = false;
    btnSubstract.disabled = false;
    btnDivide.disabled = false;  */
  });

  btnDivide.addEventListener('click', () => {
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
/*     btnDivide.disabled = true; 
    btnAdd.disabled = false;
    btnSubstract.disabled = false;
    btnMultiply.disabled = false; */
  });

  btnEqual.addEventListener('click', () => {
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
  })
  
 
