'use strict'

//bugs

//new digits added to zero
//when whole line is deleted
//and zero appear on the screen


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
let operator = '+';
let numberOneNumber = 0;
let numberTwoNumber;

let operandOne = 0;
let operandTwo = 0;

const displayContent = function () {
  if (numberOneNumber === 0) {
    displayValue.textContent = numberOne.toString()
  } else {
    displayValue.textContent += numberOne.toString()
  }
}

const shrinkFont = function () {
  if (displayValue.textContent.length > 12 && displayValue.textContent.length < 24) {
    displayValue.style.fontSize = '1rem'
  } else if (displayValue.textContent.length > 24) {
    displayValue.style.fontSize = '.5rem';
  } else if (displayValue.textContent.length < 12) {
    displayValue.style.fontSize = '2rem';
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

//operandOne becomes accumulator
//numberOneNumber is a diplay value
//operandTwo takes value from numberOneNumber (user input)
const toEmpty = () => {
  if (operandOne === 0){
  operandOne = numberOneNumber;
  numberOneNumber = 0;
  } else if (operandOne !== 0 /* && buttons.classList.contains('active') */) {
    operandTwo = numberOneNumber;
    operate (operandOne, operandTwo, operator);
    displayValue.textContent = operandOne;
    operandTwo = 0;
    numberOneNumber = 0;
  } 
}

const enableOperator = function () {
  btnAdd.disabled = false;
  btnSubstract.disabled = false;
  btnMultiply.disabled = false;
  btnDivide.disabled = false;
}

//highlight operator buttton
//being clicked
btnAdd.addEventListener('click', () => {
  btnAdd.classList.add('active');
  btnSubstract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  if (operator === '+') {
    toNum();
    toEmpty();
  } else {
    operator = '+'
    //toNum();
    toEmpty();
  }
  operator = "+"
  btnPoint.disabled = false;
  btnAdd.disabled = true;
});
btnSubstract.addEventListener('click', () => {
  btnSubstract.classList.add('active');
  btnAdd.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnDivide.classList.remove('active');
  if (operator === '-') {
    toNum();
    toEmpty();
  } else {
    operator = '-'
    //toNum();
    toEmpty();
  }
  operator = '-'
  btnPoint.disabled = false;
});
btnMultiply.addEventListener('click', () => {
  btnMultiply.classList.add('active');
  btnSubstract.classList.remove('active');
  btnAdd.classList.remove('active');
  btnDivide.classList.remove('active');
  if (operator === '*') {
    toNum();
    toEmpty();
  } else {
    operator = '*'
    //toNum();
    toEmpty();
  }
  operator = '*'
  btnPoint.disabled = false;
});
btnDivide.addEventListener('click', () => {
  btnDivide.classList.add('active');
  btnSubstract.classList.remove('active');
  btnMultiply.classList.remove('active');
  btnAdd.classList.remove('active');
  if (operator === '/') {
    toNum();
    toEmpty();
  } else {
    operator = '/'
    //toNum();
    toEmpty();
  }
  operator = '/'
  btnPoint.disabled = false;
});

btnDel.addEventListener('click', () => {
  displayValue.textContent = displayValue.textContent.slice(0, -1);
  //console.log(displayValue.textContent.length);
  if (displayValue.textContent.length <= 0) {
    displayValue.textContent = '0';
  }
  displayValue.textContent.includes('.') ? btnPoint.disabled = true : btnPoint.disabled = false;
  shrinkFont();
  //---------------
  numberOneNumber = Number(displayValue.textContent);
  console.log(numberOneNumber);
});
btnClear.addEventListener('click', () => {
    displayValue.textContent = '0';
    numberOneNumber = 0;
    displayValue.classList.remove('present');
    btnPoint.disabled = false;
    displayValue.style.fontSize = '2rem';
});

//nums
btnOne.addEventListener('click', () => {
  numberOne = btnOne.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnTwo.addEventListener('click', () => {
  numberOne = btnTwo.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnThree.addEventListener('click', () => {
  numberOne = btnThree.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnFour.addEventListener('click', () => {
  numberOne = btnFour.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnFive.addEventListener('click', () => {
  numberOne = btnFive.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnSix.addEventListener('click', () => {
  numberOne = btnSix.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnSeven.addEventListener('click', () => {
  numberOne = btnSeven.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnEight.addEventListener('click', () => {
  numberOne = btnEight.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnNine.addEventListener('click', () => {
  numberOne = btnNine.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});
btnZero.addEventListener('click', () => {
  numberOne = btnZero.textContent;
  displayContent();
  toNum();
  shrinkFont();
  enableOperator();
});

btnPoint.addEventListener('click', () => {
  numberOne = btnPoint.textContent;
  displayValue.textContent += `${numberOne}`;
  toNum();
  btnPoint.disabled = true;
  shrinkFont();
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
  shrinkFont();
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
