// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	let answer = 0;

	//0-100 = 20;
	for(var i = 1; i <= num; i++) {
		let match = i.toString().split('').filter((item) => item === '2');
		if(match.length) {
			answer += match.length;
		}
	}

	return answer;
}

module.exports = countTwos;