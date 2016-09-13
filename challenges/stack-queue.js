/**
 * Create a stack.Then create a queue using two stacks.
 */


<<<<<<< HEAD

function Stack() {
	this.storage = [];
	this.index = 0;
}

Stack.prototype.push = function(value) {
	this.storage[this.index] = value; 
	this.index++; 
	return this.index;
}

Stack.prototype.pop = function() {
	let result = this.storage[this.index - 1];
	this.storage.pop();
	this.index --;
	return result;
}

//let stack1 = new Stack();
// let stack2 = new Stack();

// stack1.push(10);
// stack1.push(50);
// stack2.push(5); 
// stack2.push(20);

/**
* Queue Class	
=======
function Stack() {

}


/**
* Queue Class
>>>>>>> abed993215e9f29d04f4b03654bac81ee75e358d
*/


function Queue() {
<<<<<<< HEAD
	this.stack1 = new Stack();
	this.stack2 = new Stack(); 
}

//enqueue is push
Queue.prototype.enqueue = function(val) {
	this.stack1.push(val); 
};

//dequeue is shift
Queue.prototype.dequeue = function() {
		//if stack2 exists => pop 
		//else pour stack1 into stack2 
		//then pop from stack2
		// if (this.stack2.index <= 0) {
		// 	this.stack2 = this.stack1;
		// 	this.stack2.storage.reverse(); 
		// 	this.stack1 = new Stack();
		// }  
		// return this.stack2.pop(); 
		if(!this.storage1.index && !this.storage2.index) return undefined;
		if(!this.stack2.index) {
			while(this.stack1.index > 0) {
				this.stack2.push(this.stack1.pop());
			}
		} 
		return this.stack2.pop();
};
=======

}
>>>>>>> abed993215e9f29d04f4b03654bac81ee75e358d

module.exports = {Stack: Stack, Queue: Queue};
