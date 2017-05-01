/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = {};
	this.index = 0;
}

Stack.prototype.push = function(val) {
	this.storage[this.index++] = val;
}

Stack.prototype.pop = function() {
	return this.index === 0 ? undefined : this.storage[this.index-- - 1]
}

/**
* Queue Class
*/


function Queue() {
	this.storage = {};
	this.index = 0;
}

Queue.prototype.enqueue = function(val) {
	this.storage[this.index] = new Stack();
	this.storage[this.index++].push(val);
}


Queue.prototype.dequeue = function() {
	if(this.index === 0) return undefined;
	let temp = this.storage[0];
	let i = 1;
	while(i < this.index) {
		this.storage[i - 1] = this.storage[i++];
	}
	this.index--;
	return temp.pop();
}

module.exports = {Stack: Stack, Queue: Queue};