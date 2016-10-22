/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually 
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it 
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array 
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 
But please note that all PINs, the observed one and also the results, must be strings, because of 
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/





function getPINs(observed) {
  if (!observed || observed.length === 0) return [];
	const pad = [[1, 2, 3],
		   [4, 5, 6],
		   [7, 8, 9],
   [undefined, 0, undefined]];

	function numberIndices(num) {
		var all = [];
		// if (num === 8) {
		// 	all.push(5, 7, 9, 0);
		// } else {
		// 	all.push(num + 1, num - 1, num + 3, num - 3);
		// 	all = all.filter(num => num > 0 && num < 10);
		// }
		// return all;
		let numIndex;
		pad.forEach((row, i) => {
			row.forEach((col, j) => {
				if (col === num) {
					numIndex = [i, j];
				}
			})
		})
		return numIndex;
	}
	
	function possibleNums(indices) {
		if (!indices) return [];
		let all = [];
		const x = indices[0];
		const y = indices[1];
		all.push(pad[x][y]);
		if (x !== 0) {
			all.push(pad[x - 1][y]);
		}
		if (x !== 3) {
			all.push(pad[x + 1][y]);
		}
		all.push(pad[x][y - 1]);
		all.push(pad[x][y + 1]);
		return all.filter(num => num !== undefined).map(String);
	}
	let nums = observed.split('').map(Number);
	// console.log(possibleNums(numberIndices()))
	let possibilities = [];
	let result = [];
	nums.forEach((num) => {
		possibilities.push(possibleNums(numberIndices(num)))
	})
	console.log(possibilities);
	let pins = possibilities.reduce((acc, arr) => {
		let all = [];
		acc.forEach(num => {
			arr.forEach(n => {
				all.push(num + n);
			});
		});
		return all;
	});
	return pins;
}


module.exports = getPINs