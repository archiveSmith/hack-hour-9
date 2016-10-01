// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(n) {
	let counter = 0;
	
	if(n < 2) {
		return 0;
	}
	
	for(let i = 2; i <= n; i++) {
		let strung = i.toString();
		for(let j = 0; j < strung.length; j++) {
			if(strung[j] === '2') {
				counter++;
			}
		}
	}
	return counter;
}



module.exports = countTwos;