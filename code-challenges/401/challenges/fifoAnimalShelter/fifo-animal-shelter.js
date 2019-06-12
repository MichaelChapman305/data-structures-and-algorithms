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

  dequeue(pref) {
    let temp = null;
    let result = null;

    for (let i = 0; i < this.queue.length; i++) {
      temp = this.queue.shift();

      if (temp.type === pref && !result) {
        result = temp;
      } else {
        this.queue.push(temp);
      }
    }

    return result;
  }
  
}

module.exports = AnimalShelter;
