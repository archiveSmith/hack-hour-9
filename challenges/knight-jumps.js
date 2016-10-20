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

  let [x, y] = str.match(/\d/g).map(Number),
    count = 0,
    i;
  if (!valid(x, y)) return 0;
  if (valid(x + 2)) {
    if (valid(x + 2, y + 1)) count++;
    if (valid(x + 2, y - 1)) count++;
  }
  if (valid(x - 2)) {
    if (valid(x - 2, y + 1)) count++;
    if (valid(x - 2, y - 1)) count++;
  }
  if (valid(y + 2)) {
    if (valid(x + 1, y + 2)) count++;
    if (valid(x - 1, y + 2)) count++;
  }
  if (valid(y - 2)) {
    if (valid(x + 1, y - 2)) count++;
    if (valid(x - 1, y - 2)) count++;
  }
  return count;
  function valid(x, y) {
    if (arguments.length !== 2) {
      return arguments[0] > 0 && arguments[0] < 9;
    }
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
  }
}

module.exports = knightjumps;
