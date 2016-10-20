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
  let numIntersections = 0;
  let maxX = Math.max(...x);
  let minX = Math.min(...x);
  let maxY = Math.max(...y);
  let minY = Math.min(...y);
  if (minX !== 0) {
    for (let i = 0; i < x.length; i++) {
      x[i] -= minX;
    }
  }
  if (maxY !== 0) {
    for (let i = 0; i < y.length; i++) {
      y[i] += maxY;
    }
  }
  maxX = Math.max(...x);
  minX = Math.min(...x);
  maxY = Math.max(...y);
  minY = Math.min(...y);
  let hashMap = new Array(maxX + 1);
  for (let i = 0; i < hashMap.length; i++) {
    hashMap[i] = new Array(maxY + 1);
  }
  for (let i = 0; i < hashMap.length; i++) {
    for (let j = 0; j < hashMap[i].length; j++) {
      hashMap[i][j] = 'o';
    }
  }
  // for (let i = 0; i < y.length; i++) {
  //   hashMap[y[i] - 1][x[i] - 1] = 'x';
  // }
  for (let i = 0; i < x.length; i++) {
    hashMap[x[i]][y[i]] = 'x';
  }
  for (let i = 0; i < hashMap.length; i++) {
    for (let j = 0; j < hashMap[i].length; j++) {
      if (hashMap[i][j] === 'x') {

      }
    }
  }
  return hashMap;
}

// const x = [-2, -2, 1, -1, 0, -1, 0];
// const y = [0, 1, 1, 2, 2, -1, 0];

// console.log(newIntersections(x, y));

module.exports = newIntersections;
