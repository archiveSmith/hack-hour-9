'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

//get all multiples of 3 < 1000
// 1000 % 3 gives us number of multiples so (1000%3) * 3 is the sum
// (1000%5)*5 for 5
// but we are now double counting, so we need to subtract if it is a multiple of 3*5, so subtract (1000%(3*5)) * 15
function sumMultiples3Or5Below1000() {
  return sumMultiplesXOrYBelowZ(3, 5, 10);
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
	let sumUnion = 0;
	//use a helper function to find the union of the two sets
	sumUnion = sum(x, z) + sum(y, z) - sum(x*y, z);
	return sumUnion;
}

function sum(a, n) {
	let multiple = 0;
	multiple = Math.floor((n - 1) / a);
	return a * (multiple * (multiple + 1) / 2);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;