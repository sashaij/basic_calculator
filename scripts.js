'use strict'

const buttons = document.querySelector('.btn');
//display
let displayValue = document.getElementById('curr-value');

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
let numberOneNumber;
let numberTwoNumber;

const displayContent = function () {
  if (displayValue.textContent === '0') {
    displayValue.textContent = `${numberOne}`
  } else {
    displayValue.textContent += `${numberOne}`;
  }
}

//when we click operator
//convert string to a number
//store this number in first variable
//empty the variable with string

const toNum = function () {
  numberOneNumber = Number(displayValue.textContent);
  console.log(numberOneNumber);
  numberOne = '';
  displayValue.textContent = '0';
}
//figure out how to write a function that removes class from
//any operator button

//highlight operator buttton
//being clicked
btnAdd.addEventListener('click', () => {
  btnAdd.classList.add('active');
  btnSubstract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  toNum();
});
btnSubstract.addEventListener('click', () => {
  btnSubstract.classList.add('active');
  btnAdd.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
});
btnMultiply.addEventListener('click', () => {
  btnMultiply.classList.add('active');
  btnSubstract.classList.remove('active');
  btnAdd.classList.remove('active');
  btnDivide.classList.remove('active');
});
btnDivide.addEventListener('click', () => {
  btnDivide.classList.add('active');
  btnSubstract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnAdd.classList.remove('active');
});

btnDel.addEventListener('click', () => {
  displayValue.textContent = displayValue.textContent.slice(0, -1);
  //console.log(displayValue.textContent.length);
  if (displayValue.textContent.length <= 0) {
    displayValue.textContent = '0';
  }
});
btnClear.addEventListener('click', () => {
  displayValue.textContent = '0'
});
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

btnPoint.addEventListener('click', () => {
  numberOne = btnPoint.textContent;
  displayValue.textContent += `${numberOne}`;
})

//toggle between positive and negative numbers
btnPosNeg.addEventListener('click', () => {
  if(displayValue.classList.contains('present')) {
    displayValue.classList.remove('present');
    //removes first char (which is '-' from the string)
    displayValue.textContent = displayValue.textContent.slice(1);
    //does not put minus in front of zero
  } else if (displayValue.textContent = `${numberOne}` || 
  displayValue.textContent.length <= 0) {
    displayValue.textContent = '0';
  } else {
    //adds '-' to the string
    displayValue.textContent = "-" + displayValue.textContent;
    displayValue.classList.add('present');
  }
})


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