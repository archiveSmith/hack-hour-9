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
  let numOfMoves = 0;
  const movesTried = [];
  let justNums = str.replace(/[\(\)\"]+/g,'');
  justNums = justNums.split(' ');
  const x = parseInt(justNums[0]);
  const y = parseInt(justNums[1]);

  tryToMove(x, y);

  function tryToMove(x, y) {
    if (x > 8 || y > 8 || x < 1 || y < 1 || movesTried.indexOf([x, y]) !== -1) {
      return;
    }
    numOfMoves += 1;
    const moveTried = [x, y]
    console.log('stringify = ', moveTried);
    movesTried.push([x, y]);
    tryToMove(x + 1, y + 2);
    tryToMove(x - 1, y + 2);
    tryToMove(x + 2, y + 1);
    tryToMove(x - 2, y + 1);
  }
  return numOfMoves;
}

console.log(knightjumps("(4 5)"));

module.exports = knightjumps;
