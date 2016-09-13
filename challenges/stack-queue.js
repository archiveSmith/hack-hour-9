/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.stack = [];
	this.length = 0;
}

Stack.prototype.push = function(val) {
	this.stack.push(val);
	this.length++;
}

Stack.prototype.pop = function() {
	this.length--;
	return this.stack.pop();
}


/**
* Queue Class
*/


function Queue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(val) {
	this.stack1.push(val);
}

Queue.prototype.dequeue = function() {
	if (!this.stack2.length) {
		while (this.stack1.length) {
			let popped = this.stack1.pop();
			this.stack2.push(popped);
		}
	}
	return this.stack2.pop();

}

var blah = new Queue();
blah.enqueue(1);
blah.enqueue(2);
blah.enqueue(3);
console.log("stack1 ", blah.stack1)
blah.dequeue();
console.log("stack2 ", blah.stack2)

module.exports = {Stack: Stack, Queue: Queue};
