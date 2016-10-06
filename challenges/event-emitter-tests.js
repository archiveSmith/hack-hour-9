const expect = require('chai').expect;
const EventEmitter = require('./event-emitter');

describe('EventEmitter', () => {
  describe('on method', () => {
    it('should register the event with the EventEmitter', () => {
      const emitter = new EventEmitter();
      const callback = () => 'hello';

      emitter.on('hello', callback);

      expect(emitter.listeners['hello']).to.be.an.array;
      expect(emitter.listeners['hello'][0]).to.equal(callback);
    });

    it('should register multiple events', () => {
      const emitter = new EventEmitter();
      const callback1 = () => 1;
      const callback2 = () => 2;

      emitter.on('hello', callback1);
      emitter.on('hello', callback2);

      expect(emitter.listeners['hello']).to.have.length(2);
      expect(emitter.listeners['hello'][0]).to.equal(callback1);
      expect(emitter.listeners['hello'][1]).to.equal(callback2);
    });
  });

  describe('trigger method', () => {
    let emitter, i, j;

    beforeEach(() => {
      emitter = new EventEmitter();
      i = j = 0;
    });

    it('should trigger the event handler when called', () => {
      expect(i).to.equal(0);

      emitter.on('increment', () => i++);
      emitter.trigger('increment');

      expect(i).to.equal(1);
    });

    it('should trigger all of the event handlers when called', () => {
      expect(i).to.equal(0);
      expect(j).to.equal(0);

      emitter.on('increment', () => i++);
      emitter.on('increment', () => j++);

      emitter.trigger('increment');

      expect(i).to.equal(1);
      expect(j).to.equal(1);
    });

    it('should pass additional arguments into the event handlers', () => {
      emitter.on('set_i', value => {
        i = value;
      });

      expect(i).to.equal(0);
      emitter.trigger('set_i', 4);

      expect(i).to.equal(4);
    });
  });
});
