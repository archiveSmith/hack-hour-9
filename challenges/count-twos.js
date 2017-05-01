// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function countTwos(num) {
	let strArr = [];
	let count = 0;
	let strArrLen;

	for (let i = 1; i < num + 1; i++){
		//check that the number contains a 2 somewhere
		if(i.toString().indexOf('2') >= 0) {

			//convert number to array of strings and loop thru to count
			strArr = i.toString().split('');
			strArrLen = strArr.length
			for (let j = 0; j < strArrLen; j++) {
				if (strArr[j] === '2') count++;
			}
		}
	}

	return count;
}


module.exports = countTwos;