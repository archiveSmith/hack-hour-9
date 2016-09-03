/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
function Stack() {
  this.arr = [];
  this.push = function(num) {
  	if (num !== undefined) {
  		let x = 0;
  		while (x < arguments.length) {
  			this.arr[this.arr.length] = arguments[x];
  			x++;
  		}
  	}
  	return this.arr.length;
  };
  this.pop = function() {
  	if (this.arr == undefined || this.arr.length === 0) {
  		return undefined;
  	}
  	let popped = this.arr[this.arr.length-1];
  	this.arr = this.arr.slice(0,this.arr.length-1);
  	return popped;
  };
  this.getMax = function() {
  	if (this.arr.length === 0) {
  		return undefined;
  	}
  	function sort(a,b) {
  		return a-b;
  	}
  	let sorted = this.arr.sort();
  	return sorted[sorted.length-1];
  };
}


module.exports = Stack;