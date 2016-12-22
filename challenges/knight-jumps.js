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
	//let match = str.match(/\d+/gi);
  let x = parseInt(str[1]); //or 1 + to coerce 
  let y = parseInt(str[3]); //or +str[3] to coerce
  let moves = 0;
  
  if(x > 8 || y > 8 || x <= 0 || y <= 0) {
    return 0;
  }
  
  if(y + 2 <= 8 && x - 1 > 0) moves++;
  if(y + 2 <= 8 && x + 1 <= 8) moves++;
  if(y + 1 <= 8 && x - 2 > 0) moves++;
  if(y + 1 <= 8 && x + 2 <= 8) moves++;
  
  if(y - 2 > 0 && x - 1 > 0) moves++;
  if(y - 2 > 0 && x + 1 <= 8) moves++;
  if(y - 1 > 0 && x - 2 > 0) moves++;
  if(y - 1 > 0 && x + 2 <= 8) moves++;
  
  return moves; 
  
}

module.exports = knightjumps;
