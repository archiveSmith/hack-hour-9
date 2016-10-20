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
  let res = str.substring(1, 4);
  let strArr = res.split(" ")
  let numArr = [];
  numArr[0] = parseInt(strArr[0]);
  numArr[1] = parseInt(strArr[1]);
  let possible = 0;
  
  if (numArr[0]+2 <= 8) {
    if (numArr[1] + 1 <= 8) {
    	possible++;
    }
    if (numArr[1] - 1 <= 8) {
    	possible++;
    }
  }
   if (numArr[0] - 2 <= 8) {
    if (numArr[1] + 1 <= 8) {
    	possible++;
    }
    if (numArr[1] - 1 <= 8) {
    	possible++;
    }
  }
  
   if (numArr[1]+2 <= 8) {
    if (numArr[0] + 1 <= 8) {
    	possible++;
    }
    if (numArr[0] - 1 <= 8) {
    	possible++;
    }
  }
   if (numArr[1] - 2 <= 8) {
    if (numArr[0] + 1 <= 8) {
    	possible++;
    }
    if (numArr[0] - 1 <= 8) {
    	possible++;
    }
  }

  return possible;
}

module.exports = knightjumps;
