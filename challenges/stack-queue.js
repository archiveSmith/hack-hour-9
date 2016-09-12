/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.data = [];
	this.length = 0;
	this.pop = function() {
		let result = this.data.pop()
		return result;
	}
	this.push = function(val) {
		this.data.push(val);
	}
}


/**
* Queue Class
*/


function Queue() {
	this.s1 = new Stack();
	this.s2 = new Stack();
	this.enqueue = function(val) {
		this.s1.push(val);
	}
	
	this.dequeue = function() {
		let result;
		if (this.s2.length > 0) {
			result = this.s2.pop();
		} else {
			while (this.s1.data.length > 0) {
				this.s2.push(this.s1.pop());
			}
			result = this.s2.pop();
		}
		return result;
	}
}

module.exports = {Stack: Stack, Queue: Queue};
