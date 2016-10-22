// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let x = +str[1];
  let y = +str[3];

  // fold x to top left quadrant location
  // probably a better way to write this
  if (x === 8) {
    x -= 7;
  } else if (x === 7) {
    x -= 5;
  } else if (x === 6) {
    x -= 3;
  } else if (x === 5) {
    x -= 1;
  }

  // fold y to top left quadrant
  if (y === 8) {
    y -= 7;
  } else if (y === 7) {
    y -= 5;
  } else if (y === 6) {
    y -= 3;
  } else if (y === 5) {
    y -= 1;
  }

  const product = x * y;
  if (product >= 9) {
    return 8;
  } else if (product >= 6) {
    return 6;
  } else if (product >= 3) {
    return 4;
  } else if (product === 2) {
    return 3;
  }
  return 2;

  /* layout of x * y in single quadrant
  [1, 2, 3, 4]
  [2, 4, 6, 8]
  [3, 6, 9, 12]
  [4, 8, 12, 16]
  =============
  amount of moves from each coordinate
  [2, 3, 4, 4]
  [2, 4, 6, 6]
  [3, 6, 8, 8]
  [4, 6, 8, 8]
  */
}

module.exports = knightjumps;
