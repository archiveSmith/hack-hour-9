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

}

EventEmitter.prototype.on = function(event, func) {
	if(!this.trigger[event]) {
		this[event] = [];
		this[event].push(func);
	}
}

EventEmitter.prototype.trigger = function(e, ...args) {
	if(!this[e]) return false 
	
	for(let i = 0; i < this[e].length i++) {
			this[e][i](...args);
		}
	return true;
}

module.exports = EventEmitter;
