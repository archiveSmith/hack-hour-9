// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
	var temp;
	var swaps;
  //sort from back to the front. this keeps track of how many iterations are needed to sort array.
	for (var j = array.length; j > 0; j--){
		swaps = false;
    //start at beginning of array and compare current and next number. swap if curr is larger than next.
		for (var i = 0; i < array.length; i++){
			if (array[i] > array[i+1]){
				swaps = true;
				temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
			}
		}
    //if you iterate through the array without swapping, array is now sorted
		if (!swaps){
			return array;
		}
	}
	return array;
}

module.exports = bubbleSort;
