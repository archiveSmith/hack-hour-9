// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// 8 maximum ways
// two left and one up/down
// two right and one up/down
// two up and one left/right
// two down and one left/right
// do the math to see if any of those moves are legal, then add one to a counter for each legal move

function knightjumps(str) {
	let numMoves = 0;

	//extract the coordinates
	const position = [str[1], str[3]];
	const [x, y] = position;

	// helper function using destructuring
	function isLegalPosition([x,y]) {
		if ((x > 0 && x < 9) && (y > 0 && y < 9)) {
			return true;
		} else return false;
	}

	
}

module.exports = knightjumps;
