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
  this.eventListeners = {};
}

EventEmitter.prototype.on = function on(event, callback) {
  if (this.eventListeners[event]) {
    this.eventListeners[event].push(callback);
  } else {
    this.eventListeners[event] = [callback];
  }
};

EventEmitter.prototype.trigger = function trigger(event, ...args) {
  const eventCallbacks = this.eventListeners[event];
  eventCallbacks.forEach((fn) => {
    fn.apply(this, ...args);
  });
};

module.exports = EventEmitter;
