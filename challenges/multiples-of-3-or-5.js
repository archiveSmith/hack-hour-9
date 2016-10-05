'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0,
    i = 0;
  for (; i * 3 < 1000; i++) {
    if (i % 5 !== 0) sum += i * 3;
    if (i * 5 < 1000) sum += i * 5;
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0,
    i = 0,
    [min, max] = [x, y].sort();
  for (; i * min < z; i++) {
    if (i % max !== 0) sum += i * min;
    if (i * max < z) sum += i * max;
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;