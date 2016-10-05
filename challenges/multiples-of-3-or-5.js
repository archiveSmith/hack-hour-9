'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 1000);
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
<<<<<<< HEAD
  return sumMultiples(x, z) + sumMultiples(y, z) - sumMultiples(x * y, z);
}

function sumMultiples(n, max) {
  const sumMax = max / n === Math.floor(max / n) ?
                 Math.floor(max / n) - 1         :
                 Math.floor(max / n);
  const sumToMax = sumMax * (sumMax + 1) / 2;
  return n * sumToMax;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ
};

module.exports = objectToExport;
