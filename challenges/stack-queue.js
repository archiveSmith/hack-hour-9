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
	this.stack.pop();
	this.length--;
}


/**
* Queue Class
*/


function Queue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();

}

module.exports = {Stack: Stack, Queue: Queue};
