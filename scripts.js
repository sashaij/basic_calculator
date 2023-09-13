'use strict'

let numberOne = 36;
let numberTwo = 6;
let operator = '*';

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