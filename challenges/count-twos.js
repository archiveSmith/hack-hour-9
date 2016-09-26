// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(n) {
	let handle2 = 0;
	let counter = 0;
	
	let nStr = ''+n;
	
	for (let k = 0; k < nStr.length; k++) {
		if(nStr[k] === '2') {
			handle2++;
		}
	}
	

	if(handle2 === nStr.length) {
		return handle2;
	}
	
	for (let i = 1; i <= n; i++) {
		let newStr = ''+i;
		for (let j = 0; j < newStr; j++) {
			if(newStr[j] === '2') {
				counter++;
			}
		}
	}
	return counter;
}



module.exports = countTwos;