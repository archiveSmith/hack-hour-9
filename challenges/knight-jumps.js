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
  return str
    .slice(1, str.length - 1)
    .split(' ')
    .map(numString => Number(numString))
    .map(num => num - 1)
    .reduce((x, y) => {
      if (x < 0 || x > 7 || y < 0 || y > 7) return 0;

      if ([0, 7].includes(x)) {
        if ([0, 7].includes(y)) {
          return 2;
        } else if ([1, 6].includes(y)) {
          return 3;
        } else {
          return 4;
        }
      } else if ([1, 6].includes(x)) {
        if ([0, 7].includes(y)) {
          return 3;
        } else if ([1, 6].includes(y)) {
          return 4;
        } else {
          return 6;
        }
      } else {
        if ([0, 7].includes(y)) {
          return 4;
        } else if ([1, 6].includes(y)) {
          return 6;
        } else {
          return 8;
        }
      }
    });
}

module.exports = knightjumps;
