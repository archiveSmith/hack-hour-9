/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
	this.events = {};
	
	this.on = function (eventName, func) {
		//if eventName isnt in the object, create a new array and push it
		
		if (Object.keys(this.events).indexOf(eventName) === -1) {
			this.events[eventName] = [];
			this.events[eventName].push(func);
		} else {
			this.events[eventName].push(func);
		}
	};
	
	this.trigger = function (eventName, ...args) {
		// console.log(args);
		if (Object.keys(this.events).indexOf(eventName) === -1) return;
		let arrayOfFuncs = this.events[eventName];
		arrayOfFuncs.forEach(function (func) {
			func(...args);
		});
	};
}

module.exports = EventEmitter;
