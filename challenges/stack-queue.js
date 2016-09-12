/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = {};
	this.index = 0;
	this.push = function(input){
		this.storage[++this.index] = input;
	}
	this.pop = function(){
		var temp = this.storage[this.index];
		delete this.storage[this.index];
		this.index--;
		return temp;
	}
}



/**
* Queue Class
*/


function Queue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
	
	this.enqueue = function(input){
		this.stack1.push(input)
	}
	this.dequeue = function(){
		while(this.stack1.index > 1){
			this.stack2.push(this.stack1.pop())
		}
		var returnVal = this.stack1.pop();
		this.stack1 = this.stack2
		return returnVal
	}
	
}

module.exports = {Stack: Stack, Queue: Queue};
