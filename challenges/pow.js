/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let total = 0;
  if (power === 1){return base};
  while(power > 1){
    total = multiply(base, total);
    power--;
  }
  return total;
}
function multiply(x ,y){
  if(z === 0){
  return x * x;
  }else {
    return x * y;
  }
}

module.exports = pow;
