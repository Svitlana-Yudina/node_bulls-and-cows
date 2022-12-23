'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { generateNamber } = require('./generateNumber');
const { calcBullsAndCows } = require('./calcBullsAndCows');
// const { game } = require('./game');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNamber = generateNamber();

terminal.question('Try to guess the number:)', (number) => {
  const checkedNum = [];

  for (const digit of number) {
    if (!checkedNum.includes(digit)) {
      checkedNum.push(digit);
    }
  }

  if (checkedNum.length !== number.length || number.length !== 4) {
    console.log('Your number should have 4 different digits');
    terminal.close();
  }

  if (checkedNum.length === randomNamber.length) {
    console.log(calcBullsAndCows(randomNamber, checkedNum));
    terminal.close();
  }
});
