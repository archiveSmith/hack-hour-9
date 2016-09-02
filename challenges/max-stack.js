/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.newstack = [];
	this.push = function(input){return this.newstack.push(input)};
	this.pop = function(){return this.newstack.pop()};
	this.getMax = function(){
		return Math.max(...this.newstack)};
}
//sjdfkjf

module.exports = Stack;