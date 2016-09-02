/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.stack = [];
  this.length = 0;
	this.push = (num) => {
		this.stack[stack.length] = num;
    this.length++;
		return this.stack.length;
	}
	this.pop = () => {
  	if(this.stack.length === 0) return undefined;
		let temp = this.stack[this.stack.length - 1]
		delete this.stack[this.stack.length - 1]
    this.length--;
		return temp;
	}
  this.getMax = () => {
  	if(this.stack.length === 0) return undefined;
  	let tempArray = this.stack.slice();
    tempArray.sort((a, b) => {
    	return b - a;
    });
    return tempArray[0];
  }
}

module.exports = Stack;