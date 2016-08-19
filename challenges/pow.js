/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  // ITERATIVE SOLUTION
  // if (base < 0) {
  //   return undefined;
  // }
  // let result = 1;
  // while (power--) {
  //   result *= base;
  // }
  // return result;

  //RECURSIVE
  // if (power == 0) {
  //   return 1;
  // } else {
  //   return base * pow(base, --power);
  // }

  // RECURSIVE TERNARY
  // console.log(power);
  return power == 0? 1 : base * pow(base, --power);

}

module.exports = pow;
