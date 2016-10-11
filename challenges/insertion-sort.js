// Write a function that sorts and array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (i = 1; i < array.length; i++) {
  	let toInsert = array[i]
		for (j = i - 1; j >= 0; j--) {
			let toCompare = array[j];
			if(toInsert < toCompare) {
				array[j + 1] = array[j];
				array[j] = toInsert;
			}
		}
  }
	return array;
}

module.exports = insertionSort;