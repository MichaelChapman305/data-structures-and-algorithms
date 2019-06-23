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
      it('Can successfully instantiate an empty stack', () => {
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

      it('Adds multiple items to the stack', () => {
        stack.push(42);
        stack.push(52);
        stack.push(62);
  
        expect(stack.top.val).toEqual(62);
        expect(stack.top.next.val).toEqual(52);
        expect(stack.top.next.next.val).toEqual(42);
        expect(stack.length).toEqual(3);
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

      it('Can successfully empty a stack after multiple pops', () => {
        stack.push(42);
        stack.push(52);
        stack.pop();
        stack.pop();

        expect(stack.top).toBeNull();
        expect(stack.length).toEqual(0);
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
      it('Can successfully peek the next item on the stack', () => {
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
      it('Can successfully enqueue into a queue', () => {
        queue.enqueue(42);

        expect(queue.front.val).toEqual(42);
        expect(queue.back.val).toEqual(42);
        expect(queue.length).toEqual(1);
      });

      it('Can successfully enqueue multiple values into a queue', () => {
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
      it('Can successfully dequeue out of a queue the expected value', () => {
        queue.enqueue(42);
        let dequeued = queue.dequeue();

        expect(queue.front).toBeNull();
        expect(queue.length).toEqual(0);
        expect(dequeued).toEqual(42);
      });

      it('Can successfully empty a queue after multiple dequeues', () => {
        queue.enqueue(42);
        queue.enqueue(52);
        queue.dequeue();
        queue.dequeue();

        expect(queue.front).toBeNull();
        expect(queue.back).toBeNull();
        expect(queue.length).toEqual(0);
      });
    });

    describe('peek', () => {
      it('Can successfully peek into a queue, seeing the expected value', () => {
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
  