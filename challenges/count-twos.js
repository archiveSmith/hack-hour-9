// Write a function "countTwos" that takes a number as an argument, n. 
// The function will return the number of 2s encountered when counting from 1 to n (inclusive). 
// 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


const twos = {
	10: 1,
	100: 20,
	1000: 300,
	10000: 4000
}

function countTwos(num) {
 let twoCount = 0;

 for (let i = 1; i <= num; i++) {
 	let numStr = i.toString();
 	for (let j = 0; j < numStr.length; j++) {
 		console.log(j)
 		if (numStr[j] === '2') {
 			twoCount++;
 		}
 	}
 }
 return twoCount;
}

module.exports = countTwos;