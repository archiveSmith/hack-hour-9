/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (typeof base !== 'number' || typeof power !== 'number') {
    return undefined;
  }
  if (!Number.isInteger(power)) {
    return undefined;
  }
  
  if (power >= 0) {
    return (power === 0 ? 1 : base * pow(base, power - 1));
  } else {
    return (power === 0 ? 1 : pow(base, power + 1) / base);
  }
}
  

module.exports = pow;
