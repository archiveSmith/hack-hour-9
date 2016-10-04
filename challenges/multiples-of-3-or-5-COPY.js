// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(num) {
  let sum = 0;
  if (num > 1000 || num % 1 !== 0 || num < 0) {
    return 0;
  }

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

    if (z % 1 !== 0 || z < 0) {
    return 0;
  }

  for (let i = 0; i < z; i++) {
    if (i % x === 0 || i % y === 0) {
      sum += i;
    }
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;