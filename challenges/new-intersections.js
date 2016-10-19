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

function newIntersections(x, y, yArray, xArray) {
  let counter = 0;
  for (var i = 0; i < xArray.length; i++) {
    if (yArray[i] === y || yArray[i] === x || xArray[i] === x || xArray[i] === y) {
      counter++;
    }
  }
  return counter;
};

console.log('output', newIntersections(1, 2, yArr, xArr));

module.exports = newIntersections;