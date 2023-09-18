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
        return operandOne = subtract(numbOne, numbTwo);
    } else if (oPerat === '*') {
        console.log('mult ' + multiply(numbOne, numbTwo));
        return operandOne = multiply(numbOne, numbTwo);
    } else if (oPerat === '/') {
        console.log('div ' + divide(numbOne, numbTwo));
        return operandOne = divide(numbOne, numbTwo);
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

    //input
      btnOne.addEventListener('click', () => {
        currentDigit = 1;
        displayFill();
      });
      btnTwo.addEventListener('click', () => {
        currentDigit = 2;
        displayFill();
      });
      btnThree.addEventListener('click', () => {
        currentDigit = 3;
        displayFill();
      });
      btnFour.addEventListener('click', () => {
        currentDigit = 4;
        displayFill();
      });
      btnFive.addEventListener('click', () => {
        currentDigit = 5;
        displayFill();
      });
      btnSix.addEventListener('click', () => {
        currentDigit = 6;
        displayFill();
      });
      btnSeven.addEventListener('click', () => {
        currentDigit = 7;
        displayFill();
      });
      btnEight.addEventListener('click', () => {
        currentDigit = 8;
        displayFill();
      });
      btnNine.addEventListener('click', () => {
        currentDigit = 9;
        displayFill();
      });
      btnZero.addEventListener('click', () => {
        currentDigit = 0;
        displayFill();
      });

      btnPoint.addEventListener('click', () => {
        currentDigit = '.';
        if (displayValue.length > 0) {
            displayValue.push(currentDigit);
        }
            display.textContent = displayValue.join(''); 
            btnPoint.disabled = true;
            console.log(displayValue + ' point') ;
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
      });
      btnClear.addEventListener('click', () => {
        currentDigit = 0;
        displayValue = [0];
        display.textContent = 0;
        //displayValue.classList.remove('present');
        btnPoint.disabled = false;
        display.style.fontSize = '2rem';
        console.log(displayValue + ' clear') ;
        operands = [];
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
      })
    

//highlight operator buttton
//being clicked



    btnAdd.addEventListener('click', () => {
    btnAdd.classList.add('active');
    btnSubstract.classList.remove('active');
    btnMultiply.classList.remove('active');
    btnDivide.classList.remove('active');
    operator = '+';
    btnPoint.disabled = false;
    deletePoint();
    
    if (operands.length === 2) {
        operands.pop();
        operands.push(Number(displayValue.join('')));
        operate(operands[0], operands[1], operator);
        displayValue = [0];
        display.textContent = operands[0]; 
    } else if (operands.length === 1) {
        operands.push(Number(displayValue.join('')));
        operate(operands[0], operands[1], operator);
        display.textContent = operands[0];
        displayValue = [0];
    } else {
        operands.push(Number(displayValue.join('')));
        //operate(operands[0], operands[1], operator);
        displayValue = [0];
    }
  });
    //algo
    //input 2
    //press operator button
    //--probably disable operator button
    //--until num button is pressed
    //'join' array
    //transform it into a number
    //pass it to operandOne
    //make displayValue = [0]
    //input 2
    //press operator or equal button
    //'join' array
    //transform it into a number
    //pass it to operandTwo
    //perform opertion on these numbers
    //pass the result to operandOne
    //make operandTwo zero
    //make displayValue = [0];
    //display.textContent = operandOne;

  btnSubstract.addEventListener('click', () => {
    btnSubstract.classList.add('active');
    btnAdd.classList.remove('active');
    btnMultiply.classList.remove('active');
    btnDivide.classList.remove('active');
    operator = '-';
    btnPoint.disabled = false;
    deletePoint();
  });
  btnMultiply.addEventListener('click', () => {
    btnMultiply.classList.add('active');
    btnSubstract.classList.remove('active');
    btnAdd.classList.remove('active');
    btnDivide.classList.remove('active');

    operator = '*'
    btnPoint.disabled = false;
    deletePoint();
  });
  btnDivide.addEventListener('click', () => {
    btnDivide.classList.add('active');
    btnSubstract.classList.remove('active');
    btnMultiply.classList.remove('active');
    btnAdd.classList.remove('active');
    operator = '/'
    btnPoint.disabled = false;
    deletePoint();
  });
  btnEqual.addEventListener('click', () => {

  })
  
 
////////////////////
let operatr = '*';
const operatedArr = [2, 3];
const operate2 = function (numbOne, numbTwo, oPerat) {
    if(oPerat === '+') {
        console.log('sum ' + add(numbOne, numbTwo));
        return operandOne = add(numbOne, numbTwo);
    } else if (oPerat === '-') {
        console.log('diff ' + subtract(numbOne, numbTwo));
        return operandOne = subtract(numbOne, numbTwo);
    } else if (oPerat === '*') {
        console.log('mult ' + multiply(numbOne, numbTwo));
        return operandOne = multiply(numbOne, numbTwo);
    } else if (oPerat === '/') {
        console.log('div ' + divide(numbOne, numbTwo));
        return operandOne = divide(numbOne, numbTwo);
    }
  }

  operate2(operatedArr[0], operatedArr[1], operatr);