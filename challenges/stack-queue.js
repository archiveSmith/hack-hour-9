
function Stack(value) {
    this.stack = [];
}
Stack.prototype.push = function(value) {
    return this.stack.push(value)
}
Stack.prototype.pop = function(value) {
    return this.stack.pop(value)
}

/**
* Queue Class
*/

function Queue() {
	this.Queue = [];
	this.in = new Stack();
	this.out = new Stack()
}

Queue.prototype.enqueue = function(value){
	this.in.push(value);
    // console.log(this.in.stack)
}

Queue.prototype.dequeue = function(value){
	// console.log(this.in.stack)
	while(this.in.stack.length !== 0){
			this.out.push(this.in.pop());
				console.log(this.out.stack)
	}
	
	return this.out.pop()
}

module.exports = {Stack: Stack, Queue: Queue};
