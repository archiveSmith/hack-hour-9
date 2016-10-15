// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	let arr = array.slice();
	let temp;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j + 1] < arr[j]) {
				//swap
				temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}


module.exports = bubbleSort;
