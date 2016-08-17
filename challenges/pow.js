/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
function pow(base, power, current = 1) {
  if (power >= 0 && (current >= 1 || base < 0)) {
    if (power === 0) {
      return current;
    } else {
      return pow(base, power - 1, base * current);
    }
  } else {
    if (current === 0) {
      current = 1;
    }
    if (power == 0) {
      return current;
    }
    return pow(base, power + 1, (current / base));
  }
}
module.exports = pow;

//testing efficiency



//function pow1(base, power, current = 0) {
//if (power === 0) {
//  return current;
//} else {
//  pow1(base, power - 1, base + current);
//}

//
//function pow2(base, power, current = 0) {
//  if (power === 0) {
//    return 1;
//  } else {
//    return base * pow2(base, power - 1, base + current);
//  }
//}
//
//
//function test(func) {
//  let result = 0,
//    now;
//  for (let i = 0; i < 10000; i++) {
//    now = Date.now()
//    func(i, 15)
//    result += Date.now() - now;
//  }
//  return result / 10000 + 'miliseconds';
//}
//test(pow1);
//test(pow2);