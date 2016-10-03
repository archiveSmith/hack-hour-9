use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  for (let i = 3, j = 5; i < 1000; i = i + 3, j = j + 5){
    if (j < 1000) {
      sum += j;
    }
    sum += i;
  }
  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let large = Math.Max(x, y);
  let small = Math.min(x, y);
  for (let i = small, j = large; i < z; i = i + small, j = j + large){
    if (j < z) {
      sum += j;
    }
    sum += i;
  }
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;