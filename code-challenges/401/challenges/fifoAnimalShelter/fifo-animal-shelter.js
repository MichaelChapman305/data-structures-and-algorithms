'use strict';

class Animal {
  constructor() {
    this.type = null;
  }
}

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    if (!val) return 'No val';

    let animal = new Animal();
    animal.type = val;
    this.queue.push(animal);
  }
  
}

module.exports = AnimalShelter;
