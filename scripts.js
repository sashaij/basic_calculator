'use strict'

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
  console.log(divi);
  return divi;
  }

  divide(8, 2);