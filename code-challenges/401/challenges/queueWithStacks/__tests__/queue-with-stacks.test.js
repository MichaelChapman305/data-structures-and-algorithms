const queueWithStack = require('../queue-with-stacks.js');

describe('Queue with stacks module1', () => {
  let pseudoQueue;
  beforeEach(() => {
    pseudoQueue = new queueWithStack();
  });

  describe('constructor', () => {
    it('Should work', () => {
      expect(pseudoQueue).toBeDefined();
      expect(pseudoQueue).toBeInstanceOf(queueWithStack);
    });

    it('Should create two stacks', () => {
      expect(pseudoQueue.stack1).toBeDefined();
      expect(pseudoQueue.stack2).toBeDefined();
    });
  });
  
  describe('enqueue', () => {
    it('Should add a value to stack1', () => {
      pseudoQueue.enqueue(42);

      expect(pseudoQueue.stack1.peek()).toEqual(42);
      expect(pseudoQueue.stack1.length).toEqual(1);
    });

    it('Should not add a node if none is provided', () => {
      expect(pseudoQueue.enqueue()).toEqual('No value');
      expect(pseudoQueue.stack1.length).toEqual(0);
    });
  });

  describe('dequeue', () => {
    it('Should move all nodes from stack 1 to stack 2', () => {
      pseudoQueue.enqueue(42);
      pseudoQueue.enqueue(52);
      pseudoQueue.dequeue();

      expect(pseudoQueue.stack1.length).toEqual(0);
      expect(pseudoQueue.stack2.length).toEqual(1);
      expect(pseudoQueue.stack2.top.val).toEqual(52);
      expect(pseudoQueue.stack1.top).toBeNull();
    });

    it('Should pop the top item and return its val', () => {
      pseudoQueue.enqueue(42);
      pseudoQueue.enqueue(52);
      
      expect(pseudoQueue.dequeue()).toEqual(42);
      expect(pseudoQueue.stack1.length).toEqual(0);
      expect(pseudoQueue.stack2.length).toEqual(1);
      expect(pseudoQueue.stack2.top.val).toEqual(52);
      expect(pseudoQueue.stack1.top).toBeNull();
    });
  });
});