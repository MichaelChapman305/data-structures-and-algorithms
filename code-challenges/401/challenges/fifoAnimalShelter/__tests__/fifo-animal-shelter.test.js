'use strict';

const animalShelter = require('../fifo-animal-shelter');

describe('fifo-anima-shelter module', () => {
  let shelter;
  beforeEach(() => {
    shelter = new animalShelter();
  });

  describe('constructor', () => {
    it('Should create an instance of animalShelter', () => {
      expect(shelter).toBeDefined();
      expect(shelter).toBeInstanceOf(animalShelter);
    });

    it('Should create an empty queue', () => {
      expect(shelter.queue).toBeDefined();
      expect(shelter.queue).toBeInstanceOf(Array);
    });
  });

  describe('enqueue', () => {
    it('Should add an animal to the queue', () => {
      shelter.enqueue('cat');

      expect(shelter).toBeDefined();
      expect(shelter).toBeInstanceOf(animalShelter);
      expect(shelter.queue[0].type).toEqual('cat');
      expect(shelter.queue.length).toEqual(1);
    });

    it('Should not add an animal if no value is provided', () => {
      expect(shelter.queue).toBeDefined();
      expect(shelter.queue).toBeInstanceOf(Array);
      expect(shelter.queue.length).toEqual(0);
    });
  });

  describe('dequeue', () => {
    it('Should remove the oldest specified animal from the queue', () => {
      shelter.enqueue('cat');
      shelter.enqueue('dog');
      shelter.enqueue('cat');
      let removed = shelter.dequeue('dog');

      expect(removed).toEqual({type:'dog'});
      expect(shelter).toBeDefined();
      expect(shelter).toBeInstanceOf(animalShelter);
      expect(shelter.queue.length).toEqual(2);
    });

    it('Should not remove any other animal', () => {
      shelter.enqueue('cat');
      shelter.enqueue('dog');
      shelter.enqueue('cat');
      shelter.dequeue('dog');

      expect(shelter.queue[0].type).toEqual('cat');
      expect(shelter.queue[1].type).toEqual('cat');
    });
  });
});