// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
	var count = 0;
	
	//increment up to number
    for (var numCopy = 2; numCopy <= num; numCopy++) {
        
        var numCopyIndex = 0;
        numString = numCopy.toString();
        	
        	//At each number (as we increment manually up to num check all the indexes of that number to look for 2
            while (numCopyIndex < numString.length) {
                if (numString[numCopyIndex] == '2') {
                        count++;
                    }
                    numCopyIndex++;
                }
            }
            return count;
}

module.exports = countTwos;