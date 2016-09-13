/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = {};
	this.index = 0;
	this.push = function(input){
		this.storage[this.index++] = input;
	}
	this.pop = function(){
		var temp = this.storage[this.index - 1];
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
	};
	
	this.dequeue = function(){
		length = this.stack1.index;
		for(var i = 0; i < length; i++){
			this.stack1.index
			this.stack2.push(this.stack1.pop())
		}	
		var returnval = this.stack2.pop();
		length = this.stack2.index;
		for(i = 0; i < length; i++){
			this.stack1.push(this.stack2.pop())
		}	
		return returnval;
	}
	
}

module.exports = {Stack: Stack, Queue: Queue};
