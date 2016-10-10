// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	for(var i = 1; i < array.length; i++) {
	let tempArr = array[i]; 
	let tempIndex = i; 
	while (tempIndex > 0 && array[tempIndex - 1] > tempArr) {
		array[tempIndex] = array[tempIndex - 1];
		tempIndex--; 
	}
	array[tempIndex] = tempArr; 
	}
	return array; 
}

module.exports = insertionSort;