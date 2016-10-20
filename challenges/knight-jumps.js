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
  const coords = str.replace(/\D+/g, "").split("");
  console.log(coords);
  const xcoord = Number(coords[0]);
  const ycoord = Number(coords[1])
  if(xcoord > 2 && xcoord < 7 && ycoord > 2 && ycoord < 7){
    // middle of the board is all 8
    return 8;
  }
  if(xcoord > 2 && xcoord < 7 && (ycoord === 2 || ycoord === 7)){
    return 6;
  }
  if((xcoord === 1 || xcoord === 8) && (ycoord === 1 || ycoord === 8)){
    return 2;
  }
  if (((xcoord === 2 || xcoord === 7) && (ycoord === 2 || ycoord === 7)) || ((xcoord > 2 && xcoord < 7) && (ycoord === 1 || ycoord === 8)) || ((ycoord > 2 && ycoord < 7) && (xcoord === 1 || xcoord === 8)) ){
    return 4;
  }
  if (((xcoord === 2 || xcoord === 7) && (ycoord === 1 || ycoord === 8))){
    return 3;
  }

}

module.exports = knightjumps;
