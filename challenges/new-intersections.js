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

function newIntersections(xArr, yArr) {
  let count = 0;
  let top, left, right, bottom;
  const xCords = xArr.reduce((memo, x, index) => {
    if (memo[x]) {
      memo[x][yArr[index]] = index;
    } else {
      memo[x] = { [yArr[index]]: index };
    }
    if (x > memo.max) memo.max = x;
    if (x < memo.min) memo.min = x;
    return memo;
  }, { max: -Infinity, min: Infinity });
  const yCords = yArr.reduce((memo, y, index) => {
    if (memo[y]) {
      memo[y][xArr[index]] = index;
    } else {
      memo[y] = { [xArr[index]]: index };
    }
    if (y > memo.max) memo.max = y;
    if (y < memo.min) memo.min = y;
    return memo;
  }, { max: -Infinity, min: Infinity });
  const maxDiff = Math.abs(xCords.max - xCords.min) > Math.abs(yCords.max - yCords.min) ?
    Math.abs(xCords.max - xCords.min) :
    Math.abs(yCords.max - yCords.min);
  for (let i = xCords.min + 1; i < xCords.max; i++) {
    for (let j = yCords.min + 1; j < yCords.max; j++) {
      top = false;
      bottom = false;
      right = false;
      left = false;
      if (xCords[i] && yCords[j]) {
        for (let k = 1; k < maxDiff; k++) {
          if (xCords[i + k] === j) right = true;
          if (xCords[i - k] === j) left = true;
          if (yCords[j + k] === i) top = true;
          if (yCords[j - k] === i) bottom = true;
          if (right && left && top && bottom) {
            count++;
            break;
          }
        }
      }
    }
  }
  return count;
}

module.exports = newIntersections;
