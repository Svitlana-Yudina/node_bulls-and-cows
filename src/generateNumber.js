'use strict';

function generateNamber() {
  const randomNamber = [];

  while (randomNamber.length < 4) {
    const x = Math.floor(Math.random() * 10);

    if (!randomNamber.includes(x)) {
      randomNamber.push(x);
    }
  }

  return randomNamber.map(digit => String(digit));
}

module.exports.generateNamber = generateNamber;
