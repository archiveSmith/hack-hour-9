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
  let events = {};

  this.on = function (type, listener) {
    if (!events[type]) {
      events[type] = [listener];
    } else {
      events[type].push(listener);
    }
  };

  this.trigger = function (type, ...args) {
  	let event = events[type];
  	if (!event) {
    	return;
  	} else {
		  for (var i = 0; i < event.length; i++) {
	    	event[i].apply(this, args);
	  	}
  	}
  };
}

var instance = new EventEmitter();
var counter = 0;
instance.on('increment', function() {
	counter++;
}); // counter should be 0
instance.trigger('increment'); // counter should be 1
console.log(counter)
instance.trigger('increment'); // counter should be 2
console.log(counter)

module.exports = EventEmitter;
