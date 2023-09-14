'use strict'

const buttons = document.querySelector('.btn');
//display
const displayValue = document.getElementById('curr-value');

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

let numberOne = 36;
let numberTwo = 6;
let operator = '*';

const displayContent = function () {
  if (displayValue.textContent === '0') {
    displayValue.textContent = `${numberOne}`
  } else {
    displayValue.textContent += `${numberOne}`;
  }
}

btnOne.addEventListener('click', () => {
  numberOne = btnOne.textContent;
  displayContent();
});
btnTwo.addEventListener('click', () => {
  numberOne = btnTwo.textContent;
  displayContent();
});
btnThree.addEventListener('click', () => {
  numberOne = btnThree.textContent;
  displayContent();
});
btnFour.addEventListener('click', () => {
  numberOne = btnFour.textContent;
  displayContent();
});
btnFive.addEventListener('click', () => {
  numberOne = btnFive.textContent;
  displayContent();
});
btnSix.addEventListener('click', () => {
  numberOne = btnSix.textContent;
  displayContent();
});
btnSeven.addEventListener('click', () => {
  numberOne = btnSeven.textContent;
  displayContent();
});
btnEight.addEventListener('click', () => {
  numberOne = btnEight.textContent;
  displayContent();
});
btnNine.addEventListener('click', () => {
  numberOne = btnNine.textContent;
  displayContent();
});
btnZero.addEventListener('click', () => {
  numberOne = btnZero.textContent;
  displayContent();
});


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

  const operate = function (numbOne, numbTwo, oPerat) {
    if(oPerat === '+') {
        console.log(add(numbOne, numbTwo));
    } else if (oPerat === '-') {
        console.log(subtract(numbOne, numbTwo));
    } else if (oPerat === '*') {
        console.log(multiply(numbOne, numbTwo));
    } else if (oPerat === '/') {
        console.log(divide(numbOne, numbTwo));
    }
  }

  operate(numberOne, numberTwo, operator);