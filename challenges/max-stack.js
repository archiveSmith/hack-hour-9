/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.data = {};
  this.length = 0;
  this.maxVal = -Infinity;
}

Stack.prototype.pop = function() {
	let res = this.data[this.length - 1];
  	delete this.data[this.length - 1]
  	if (res === this.maxVal) {
  		let newMaxVal = -Infinity;
  		for (let key in this.data) {
  			this.maxVal = (this.data[key] > newMaxVal) ? this.data[key] : newMaxVal;
  		}
  	}
  	this.length--;
  	return res
}

Stack.prototype.push = function(value) {
	this.data[this.length] = value;
  	this.maxVal = (value > this.maxVal) ? value : this.maxVal;
  	return this.length++
}

Stack.prototype.getMax = function() {
	return this.maxVal;
}

module.exports = Stack;