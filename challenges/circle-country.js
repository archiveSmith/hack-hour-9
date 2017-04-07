/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, 
 * he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  function checkIfInside(x, y, r, tx, ty) {
    return (((tx < x + r)) && ((tx > x - r))) && (((ty < y) + r) && (ty > (y - r)));
  }
  //add one for every circle that the start point is in, but the destination is not
  // add one for every circle that the end point is in, but the start is not
  let borderCount = 0,
    i = 0,
    len = x.length;
  for (; i < len; i++) {
    borderCount += checkIfInside(x[i], y[i], r[i], start_x, start_y) ^ checkIfInside(x[i], y[i], r[i], end_x, end_y);
  }
  return borderCount;
}


function circleCountry2(x, y, r, start_x, start_y, end_x, end_y) {
  function checkIfInside(cx, cy, cr, tx, ty) {
    return Math.sqrt(Math.pow(tx - cx) + Math.pow(ty - cy)) < cr;
  }
  // add one for every circle that the start point is in, but the destination is not
  // add one for every circle that the end point is in, but the start is not
  let borderCount = 0;
  const len = x.length;
  let result;
  for (let i = 0; i < len; i++) {
    // bitwise or
    result = checkIfInside(x[i], y[i], r[i], start_x, start_y) ^ checkIfInside(x[i], y[i], r[i], end_x, end_y);
    borderCount += result;
  }
  return borderCount;
}

function circleCountry1(x, y, r, start_x, start_y, end_x, end_y) {
  function checkIfInside(cx, cy, cr, tx, ty) {
    return Math.sqrt(Math.pow(tx - cx) + Math.pow(ty - cy)) < cr;
  }
  // add one for every circle that the start point is in, but the destination is not
  // add one for every circle that the end point is in, but the start is not
  let borderCount = 0;
  const len = x.length;
  let result;
  for (let i = 0; i < len; i++) {
    // XOR
    result = !checkIfInside(x[i], y[i], r[i], start_x, start_y) !== !checkIfInside(x[i], y[i], r[i], end_x, end_y);
    borderCount += result;
  }
  return borderCount;
}

circleCountry1();
circleCountry2();
module.exports = circleCountry;










