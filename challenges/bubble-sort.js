// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let count = array.length;
  
  while(count > 0) {
  	for(let i = 0; i < count; i++) {
  			if (array[i] > array[i + 1]) {
  				let temp = array[i + 1]
  				array[i + 1] = array[i]
  				array[i] = temp
			  }
		  }
		  count--
	  }

	return array
}

module.exports = bubbleSort;
