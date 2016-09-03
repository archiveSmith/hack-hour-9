/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


function Stack() {
	this.contents = {};
    // this.length = 0;
  this.index = 0;

  console.log("contents ", this.contents);
	console.log("index ", this.index);
	console.log('\n');
}


Stack.prototype.push = function(item){
	this.contents[this.index] = item;
	this.index++;

	console.log("contents ", this.contents);
	console.log("index ", this.index);
	console.log('\n');

	return this.index;
};


Stack.prototype.pop = function(){
	let lastItemIndex = this.index - 1;
	let poppedItem = this.contents[lastItemIndex];
	this.index--;	
	delete this.contents[lastItemIndex];

	console.log("contents ", this.contents);
	console.log("index ", this.index);
	console.log('\n');

	return poppedItem;
};

Stack.prototype.getMax = function(){
	let max = -Infinity;
	for(let i = 0; i < this.index; i++){
		if(this.contents[i] > max) max = this.contents[i];
		console.log(max);
	}
	return max;
};


module.exports = Stack;