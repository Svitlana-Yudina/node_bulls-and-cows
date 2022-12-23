'use strict';

function calcBullsAndCows(progNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (progNumber[i] === userNumber[i]) {
      bulls += 1;
    } else {
      if (progNumber.includes(userNumber[i])) {
        cows += 1;
      }
    }
  }

  return `bulls - ${bulls}, cows - ${cows}`;
}

module.exports.calcBullsAndCows = calcBullsAndCows;
