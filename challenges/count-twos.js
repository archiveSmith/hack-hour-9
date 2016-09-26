// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	let counter = 0;
	let twoCount = 0;
	const re = /\d(?!.*\d)/;
	let digitArr, digitLen;
	while (counter <= num) {
		digitArr = ("" + counter).split("");
		
		// console.log(lastDigit)
		for (var i = 0; i < digitArr.length; i++) {
			if (digitArr[i] == 2) {
				twoCount += 1;
			}
		}
		counter++;
	}
	return twoCount;
}

module.exports = countTwos;