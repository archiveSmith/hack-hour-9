// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let arr = [];
  let tot5 = 1000;

  while (tot5 > 0) {
    if (tot5 % 5 === 0 || tot5 % 3 === 0) {
      arr.push(tot5);
    }
    tot5 = tot5 - 1;
  }

  return arr.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue;
  });

};

console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let arr = [];
  let tot5 = 1000;

  while (tot5 > 0) {
    if (tot5 % x === 0 || tot5 % y === 0 || tot5 % z === 0) {
      arr.push(tot5);
    }
    tot5 = tot5 - 1;
  }

  return arr.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue;
  });

};

console.log(sumMultiplesXOrYBelowZ(3, 5, 11));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;