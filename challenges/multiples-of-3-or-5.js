'use strict';


// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  for(let i = 0; i < 1000; i+=5){
    sum += i;
  }
  for(let j = 0; j < 1000; j+=3){
    sum += j;
  }

  return sum;
}

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let sumxa;
  if(z % x === 0 && Math.round(z/x) % 2 === 0){
  	sumxa = (z/x)-1;
  }
  else {
  	sumxa = Math.round((z/x))
  }
  let sumxb = Math.round((sumxa/2))
  console.log(sumxa);
  console.log(sumxb);
  let sumx = sumxa * sumxb * x;
  let sumya;
  if(z % y === 0){
  	sumya = (z/y)-1;
  }
  else {
  	sumya = Math.round((z/y));
  }
  console.log('sumya', sumya);
  let sumyb = Math.ceil((sumya-1)/2);
  console.log(sumyb);
  let sumy = sumya * sumyb * y;
  sum += (sumy + sumx);
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
