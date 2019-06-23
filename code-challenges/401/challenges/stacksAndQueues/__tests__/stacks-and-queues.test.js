const stacksAndQueues = require('../stacks-and-queues.js');

describe('stacksAndQueues Module', () => {
  let Stack = stacksAndQueues.stack;
  let Queue = stacksAndQueues.queue;

  describe('Stack', () => {
    let stack;
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

    describe('push', () => {
      it('Adds an item to top of stack', () => {
        stack.push(42);
  
        expect(stack.top.val).toEqual(42);
        expect(stack.length).toEqual(1);
      });
  
      it('Should not push an item when no argument is provided', () => {
        stack.push();
  
        expect(stack.top).toBeNull();
        expect(stack.length).toEqual(0);
      });
    });

    describe('pop', () => {
      it('Should remove the top item from stack', () => {
        stack.push(42);
        let pop = stack.pop();

        expect(stack.top).toBeNull();
        expect(stack.length).toEqual(0);
        expect(pop).toEqual(42);
      });

      it('Should only pop 1 item from the top of the stack', () => {
        stack.push(42);
        stack.push(52);
        stack.pop();

        expect(stack.top.val).toEqual(42);
        expect(stack.length).toEqual(1);
      });
    });

    describe('peek', () => {
      it('should return the value of the top element', () => {
        stack.push(42);

        expect(stack.peek()).toEqual(42);
        expect(stack.length).toEqual(1);
      });

      it('Should not modify the stack', () => {
        stack.push(42);
        stack.push(52);

        expect(stack.peek()).toEqual(52);
        expect(stack.length).toEqual(2);
        expect(stack.top.val).toEqual(52);
      });
    });
  });

  describe('Queue', () => {
    let queue;
    beforeEach(() => {
      queue = new Queue();
    });

    describe('constructor', () => {
      it('Creates an instance of a queue', () => {
        expect(queue).toBeDefined();
        expect(queue).toBeInstanceOf(Queue);
      });

      it('creates a top property with a value of null', () => {
        expect(queue.front).toBeNull();
      });
    });

    describe('enqueue', () => {
      it('Adds a node to the back of the Queue', () => {
        queue.enqueue(42);

        expect(queue.front.val).toEqual(42);
        expect(queue.back.val).toEqual(42);
        expect(queue.length).toEqual(1);
      });

      it('Adds more than one node the back of the Queue', () => {
        queue.enqueue(42);
        queue.enqueue(52);
        queue.enqueue(35);

        expect(queue.front.val).toEqual(42);
        expect(queue.back.val).toEqual(35);
        expect(queue.length).toEqual(3);
      });


      it('Does not add a node if a value is not provided', () => {
        queue.enqueue();

        expect(queue.front).toBeNull();
        expect(queue.length).toEqual(0);
      });
    });

    describe('dequeue', () => {
      it('Removes the node at the front of the Queue', () => {
        queue.enqueue(42);
        queue.dequeue();

        expect(queue.front).toBeNull();
        expect(queue.length).toEqual(0);
      });

      it('Should only remove one item from the Queue', () => {
        queue.enqueue(42);
        queue.enqueue(52);
        queue.dequeue();

        expect(queue.front.val).toEqual(52);
        expect(queue.length).toEqual(1);
      });
    });

    describe('peek', () => {
      it('Should return the value of the front node', () => {
        queue.enqueue(42);

        expect(queue.peek()).toEqual(42);
      });

      it('Should not modify the queue', () => {
        queue.enqueue(42);
        queue.enqueue(52);

        expect(queue.peek()).toEqual(42);
        expect(queue.length).toEqual(2);
        expect(queue.front.val).toEqual(42);
      });
    });
  });
});
  