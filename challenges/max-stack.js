/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
	this.prevMax = [];
	this.max = null;
	this.storage = [];
}

Stack.prototype.push = function(val) {
	if (this.max === null || this.max <= val) {

		if (this.max !== null) {
			this.prevMax.push = this.max;
		}

		this.max = val;
	}

	return this.storage.push(val);
};

Stack.prototype.pop = function(val) {
	if (this.storage.length === 0) return undefined;
	else if (val === this.max) {
		this.max = this.prevMax.pop();
	}

	return this.storage.pop(val);
};

Stack.prototype.getMax = function(val) {
	return this.max;
};

module.exports = Stack;