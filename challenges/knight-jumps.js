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
  if (x === 8) {
    x -= 7;
  } else if (x === 7) {
    x -= 5;
  } else if (x === 6) {
    x -= 3;
  } else if (x === 5) {
    x -= 1;
  }
  if (y === 8) {
    y -= 7;
  } else if (y === 7) {
    y -= 5;
  } else if (y === 6) {
    y -= 3;
  } else if (y === 5) {
    y -= 1;
  }
  let jumpCount = 0;
  if (Math.pow((x * y), 2) === 1) {
    jumpCount = 2;
  } else if (Math.pow((x * y), 2) === 4) {
    jumpCount = 3;
  } else if (Math.pow((x * y), 2) === 9 || Math.pow((x * y), 2) === 16) {
    jumpCount = 4;
  } else if (Math.pow((x * y), 2) === 36 || Math.pow((x * y), 2) === 64) {
    jumpCount = 6;
  } else {
    jumpCount = 8;
  }
  return jumpCount;
}

module.exports = knightjumps;
