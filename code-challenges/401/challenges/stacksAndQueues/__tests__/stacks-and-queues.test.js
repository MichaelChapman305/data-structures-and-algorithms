const stacksAndQueues = require('../stacks-and-queues.js');

describe('stacksAndQueues Module', () => {
  let Stack = stacksAndQueues.stack;
  let Queue = stacksAndQueues.queue;

  describe('Stack', () => {
    let stack
    beforeEach(() => {
      stack = new Stack();
    });

    describe('constructor', () => {
      it('Creates an instance of a stack', () => {
        expect(stack).toBeDefined();
        expect(stack).toBeInstanceOf(Stack);
      });

      it('creates a top property with a value of null', () => {
        expect(stack.top).toBeNull();
      });
    });
  });
});
  