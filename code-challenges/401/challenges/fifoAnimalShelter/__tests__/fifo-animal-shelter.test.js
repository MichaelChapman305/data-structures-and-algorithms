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
});