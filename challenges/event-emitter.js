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
	// stores the associated functions for an eventName
	this.eventObj = {};
	
	// define the "on" method
	this.on = function(eventName, eventFunction) {
		
		// check if eventName exists in eventObj or not, add eventFunction to array associated with eventName
		if(! this.eventObj[eventName]) {
			this.eventObj[eventName] = [eventFunction];
		} else {
			this.eventObj[eventName].push(eventFunction);
		}
	};
	
	// define the "trigger" method
	this.trigger = function(eventName) {
		var moreArgs = Array.from(arguments);
		moreArgs.splice(0, 1); // remove the first argument, which is eventName
		
		// lookup the functions for this eventName
		if(this.eventObj[eventName]) {
			// for each eventFunction associated with this eventName, invoke it passing in any additional arguments
			this.eventObj[eventName].forEach(function(eventFunction) {
				eventFunction.apply(null, moreArgs);
			});
		}
	};
}
/* tests */
/*
var instance = new EventEmitter();
var counter = 0;
instance.on('increment', function() {
counter++;
}); // counter should be 0

//console.log(instance.eventObj);

console.log('counter', counter);
instance.trigger('increment'); // counter should be 1
console.log('counter', counter);
instance.trigger('increment'); // counter should be 2
console.log('counter', counter);


instance.on('add', function(x, y) {
	console.log(x + y);
});

instance.trigger('add', 2, 3); // expect 5

instance.on('add', function(x, y) {
	console.log(x + y + 10);
});

instance.trigger('add', 2, 3); // expect 5, 15
*/

module.exports = EventEmitter;
