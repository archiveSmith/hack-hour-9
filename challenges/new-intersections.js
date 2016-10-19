/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points directly above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *
 */

function newIntersections(x, y) {
  let total = 0;
  for (let i = 0; i < x.length; ++i) {
    for (let j = 0; j < x.length; ++j) {
      if (x[j] < x[i]) {
        for (let p = x[i]; p === x[j]; --p) {
          let above = false;
          let below = false;
          for (let newY = 0; newY < y.length; ++newY) {
            if (x[newY] === p) {
              if (y[newY] < y[i]) {
                below = true;
              }
              if ([newY] > y[i]) {
                above = true;
              }
            }
            if (above === true && below === true) total += 1;
          }
        }
      }
      if (x[j] > x[i]) {
        for (let p = x[i]; p === x[j]; ++p) {
          let above = false;
          let below = false;
          for (let newY = 0; newY < y.length; ++newY) {
            if (x[newY] === p) {
              if (y[newY] < y[i]) {
                below = true;
              }
              if ([newY] > y[i]) {
                above = true;
              }
            }
            if (above === true && below === true) total += 1;
          }
        }
      }
    }
  }
  
  return total;
}

module.exports = newIntersections;
