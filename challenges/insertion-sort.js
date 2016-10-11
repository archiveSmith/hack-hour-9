// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
	var temp;
	for (var i = 1; i < array.length; i++){
		while (i > 0 && (array[i-1] > array[i])){
			temp = array[i-1];
			array[i-1] = array[i];
			array[i] = temp;
			i = i-1;
		}
	}
	return array;
}

module.exports = insertionSort;