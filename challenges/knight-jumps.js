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
  let points = str.match(/[1-9]/g);
  for (var i = 0; i < points.length; i++) {
    points[i] = parseInt(points[i]);
  }

  let counter = 0;

  if (points[0] + 1 > 0 && points[1] + 3 > 0) {
    counter++
  };
  if (points[0] - 1 > 0 && points[1] - 3 > 0) {
    counter++
  }
  if (points[0] + 1 > 0 && points[1] - 3 > 0) {
    counter++
  }
  if (points[0] - 1 > 0 && points[1] + 3 > 0) {
    counter++
  }
  if (points[0] + 3 > 0 && points[1] + 1 > 0) {
    counter++
  };
  if (points[0] - 3 > 0 && points[1] - 1 > 0) {
    counter++
  }
  if (points[0] + 3 > 0 && points[1] - 1 > 0) {
    counter++
  }
  if (points[0] - 3 > 0 && points[1] + 1 > 0) {
    counter++
  }

  // board = [[1,3],[1,3],[1,3],[1,3],[3,1],[3,1],[3,1],[3,1],]

  // for (var i = 0; i < array.length; i++) {
  //   var element = array[i];

  // }

  return counter;

};

console.log(knightjumps("(1 1)"));

module.exports = knightjumps;