/**
 * Make an EventEmitter that
 *
 * Example:
 * let instance = new EventEmitter();
 * let counter = 0;
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

EventEmitter.prototype.on = (str, func) => {
  if (!this[str]) {
    this[str] = [];
  }
  this[str].push(func);
};

EventEmitter.prototype.trigger = (input, ...rest) => {
  this[input].forEach((fire) => fire(...rest));
};

// testing
// const instance = new EventEmitter();
// let counter = 0;
// instance.on('increment', () => {
//   counter++;
// }); // counter should be 0
// instance.on('increment', () => {
//   counter++;
// });
// instance.on('print', (...args) => {
//   args.forEach((str => {
//     console.log(str);
//   }));
// });

// console.log(`counter should be 0: ${counter}`);
// instance.trigger('increment'); // counter should be 1
// console.log(`counter should be 2: ${counter}`);
// instance.trigger('increment'); // counter should be 2
// console.log(`counter should be 4: ${counter}`);
// instance.trigger('print', 'hello');
// instance.trigger('print', 'hello', 'george');

module.exports = EventEmitter;
