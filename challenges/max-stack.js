
/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.maxAr = []; 
  this.index = 0;
  this.max = 0; 
}

Stack.prototype.push = function(value) {
	this.storage[this.index] = value;
	this.index++; 
	if(value >= this.max) {
		this.maxAr.push(value);
		this.max = value;
	}
	return this.index; 
};

Stack.prototype.pop = function(value) {
	let result = this.storage[this.index - 1];
	if(result === this.maxAr[this.maxAr.length - 1]){
		//console.log(this.maxAr);
		this.maxAr.pop();
	}
	this.index--; 
//	console.log("this result", result);
	return result; 
};
//could either keep all the values or do
//lookup 
Stack.prototype.getMax = function() {
	return this.maxAr[this.maxAr.length - 1];
};


// var container = new Stack(); 

// container.push(3);
// console.log("container/3", container);
// container.push(2);
// container.push(5); 
// console.log("container/5", container);
// container.getMax();
// container.pop(); 
// container.getMax();

module.exports = Stack;