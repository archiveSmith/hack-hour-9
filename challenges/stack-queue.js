/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
	this.storage = [];
	this.index = 0;
};

Stack.prototype.push = function(val){
	this.storage[this.index++] = val;
};

Stack.prototype.pop = function(){
	if (this.index === 0){
		return undefined;
	} else {
		var itemToPop = this.storage[--this.index];
		delete this.storage[this.index];
		return itemToPop;
	}
};

/**
* Queue Class enqueue, dequeue
*/


function Queue() {
	this.storage = new Stack();
	this.storage2 = new Stack();
};

Queue.prototype.enqueue = function(val){
	this.storage.push(val);
};

Queue.prototype.dequeue = function(){
	while(this.storage.index > 1){
		this.storage2.push(this.storage.pop());
	}
	var temp = this.storage.pop();
	while(this.storage2.index > 0){
		this.storage.push(this.storage2.pop());
	}
	return temp;
};



module.exports = {Stack: Stack, Queue: Queue};
