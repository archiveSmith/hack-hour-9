// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
 // brute force solution: loop from 1 to n, if digit contains a '2', then keep track of it
 var count = 0;
 
 for(var i = 1; i <= num; ++i) {
	var nStr = i.toString();
	 
	var found = nStr.match(/[2]/gi); // match '2'
	
	if(found !== null) { // there were match(es)
		count += found.length;
	}	 
 }
 
 return count;
 
}

/* tests */
/*
console.log(countTwos(1));  //-> 0
console.log(countTwos(3));  //-> 1
console.log(countTwos(13));  //-> 2
console.log(countTwos(1000)); // -> 300
console.log(countTwos(11420)); // -> 4483
*/

module.exports = countTwos;