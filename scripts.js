'use strict'

//bugs

//point button stays
//disabled after point
//is deleted on a screen

//digits added to zero when 
//page is refreshed

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

let numberOne = '0';
//let numberStart = 0;
let operator = '*';
let numberOneNumber = 0;
let numberTwoNumber;

let operandOne;

const displayContent = function () {
  if (numberOneNumber === 0) {
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
  //displayValue.textContent = '0';
}


const toEmpty = () => {
  operandOne = numberOneNumber;
  numberOneNumber = 0;
}


//highlight operator buttton
//being clicked
btnAdd.addEventListener('click', () => {
  btnAdd.classList.add('active');
  btnSubstract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  toNum();
  toEmpty();
  btnPoint.disabled = false;
});
btnSubstract.addEventListener('click', () => {
  btnSubstract.classList.add('active');
  btnAdd.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  toNum();
  toEmpty();
  btnPoint.disabled = false;
});
btnMultiply.addEventListener('click', () => {
  btnMultiply.classList.add('active');
  btnSubstract.classList.remove('active');
  btnAdd.classList.remove('active');
  btnDivide.classList.remove('active');
  toNum();
  toEmpty();
  btnPoint.disabled = false;
});
btnDivide.addEventListener('click', () => {
  btnDivide.classList.add('active');
  btnSubstract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnAdd.classList.remove('active');
  toNum();
  toEmpty();
  btnPoint.disabled = false;
});

btnDel.addEventListener('click', () => {
  displayValue.textContent = displayValue.textContent.slice(0, -1);
  //console.log(displayValue.textContent.length);
  if (displayValue.textContent.length <= 0) {
    displayValue.textContent = '0';
  }
  displayValue.textContent.includes('.') ? btnPoint.disabled = true : btnPoint.disabled = false;
});
btnClear.addEventListener('click', () => {
    displayValue.textContent = '0';
    numberOneNumber = 0;
    displayValue.classList.remove('present');
    btnPoint.disabled = false;
});

//nums
btnOne.addEventListener('click', () => {
  numberOne = btnOne.textContent;
  displayContent();
  toNum();
});
btnTwo.addEventListener('click', () => {
  numberOne = btnTwo.textContent;
  displayContent();
  toNum();
});
btnThree.addEventListener('click', () => {
  numberOne = btnThree.textContent;
  displayContent();
  toNum();
});
btnFour.addEventListener('click', () => {
  numberOne = btnFour.textContent;
  displayContent();
  toNum();
});
btnFive.addEventListener('click', () => {
  numberOne = btnFive.textContent;
  displayContent();
  toNum();
});
btnSix.addEventListener('click', () => {
  numberOne = btnSix.textContent;
  displayContent();
  toNum();
});
btnSeven.addEventListener('click', () => {
  numberOne = btnSeven.textContent;
  displayContent();
  toNum();
});
btnEight.addEventListener('click', () => {
  numberOne = btnEight.textContent;
  displayContent();
  toNum();
});
btnNine.addEventListener('click', () => {
  numberOne = btnNine.textContent;
  displayContent();
  toNum();
});
btnZero.addEventListener('click', () => {
  numberOne = btnZero.textContent;
  displayContent();
  toNum();
});

btnPoint.addEventListener('click', () => {
  numberOne = btnPoint.textContent;
  displayValue.textContent += `${numberOne}`;
  toNum();
  btnPoint.disabled = true;
})

//toggle between positive and negative numbers
btnPosNeg.addEventListener('click', () => {
  if(displayValue.classList.contains('present')) {
    displayValue.classList.remove('present');
    //removes first char (which is '-' from the string)
    displayValue.textContent = displayValue.textContent.slice(1);
    //does not put minus in front of zero
  } else if (displayValue.textContent === '0' || 
  displayValue.textContent.length <= 0) {
    displayValue.textContent = '0';
  } else {
    //adds '-' to the string
    displayValue.textContent = "-" + displayValue.textContent;
    displayValue.classList.add('present');
  }
  toNum();
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