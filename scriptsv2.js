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
    let displayValue = [];

    const displayFill = function () {
        displayValue.push(currentDigit);
        display.textContent = displayValue.join(''); 
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
        displayFill();
        btnPoint.disabled = true;
      })
 
