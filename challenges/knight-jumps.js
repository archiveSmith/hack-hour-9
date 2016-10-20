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
	let count = 0;
	let newArray = []
  let split = str.split('')
  newArray.push(parseInt(split[1]),parseInt(split[3]))
  let x = newArray[0]
  let y = newArray[1]
  if (x + 2 <= 8 && y - 1 >= 1)  count++;
  if (x + 1 <= 8 && y - 2 >= 1)  count++;
  if (x - 1 >= 1 && y - 2 >= 1)  count++;
  if (x - 2 >= 1 && y - 1 >= 1)  count++;
  if (x - 2 >= 1 && y + 1 <= 8)  count++;
  if (x - 1 >= 1 && y + 2 <= 8)  count++;
  if (x + 1 <= 8 && y + 2 <= 8)  count++;
  if (x + 2 <= 8 && y + 1 <= 8)  count++;  
  return count;
}

module.exports = knightjumps;
