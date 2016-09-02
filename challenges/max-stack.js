/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
	this.storage[this.length] = value;
	return ++this.length;
};

Stack.prototype.pop = function() {
	if(this.length<0){
		return null	
	}
	var locIndex = this.length;
	this.length--;
	return this.storage[this.length];
};

Stack.prototype.max = function() {
	if(this.length<0){
		return null	
	}
	var maxElement = this.storage[0]
	for (var i = 0; i < this.length; i++){
		if (this.storage[i] > maxElement){
			maxElement = this.storage[i];
		}
	}
	return maxElement
};

module.exports = Stack;