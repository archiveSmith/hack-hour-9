/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 * 
 * In some languages, strings are mutable (like in Ruby). In other languages, 
 * such as Python and Javascript, strings are immutable, meaning they cannot 
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 */

function reverseInPlace(array) {
	// for(var i = 0; i < array.length; i++){
		//take last item and insert it in position i
	// 	array.splice(i,0,array[(array.length-1)]);
	// splice returns an empty array which isn't saved.
	// 	array.pop();
	// };
	
	//solution without array methods
	var len = array.length; 
	if (len % 2 === 0){
		var numtoswitch = len / 2;
	}
	if (len % 2 === 1){
		var numtoswitch = (Math.ceil(len/2));
	}
	for(var i = 0; i < numtoswitch; i++){
		var x = array[i];
		var y = array[array.length - 1 - i]
		array[i] = y;
		array[array.length - 1 - i] = x;	
	}

}





module.exports = reverseInPlace;