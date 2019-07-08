'use strict';

let HashTable = require('../hashtable/hashtable');

let repeatedWord = (str) => {
  if (typeof str !== 'string') return 'Not a valid string';
  let words = str.toLowerCase().split(' ');

  let hashTable = new HashTable.HashTable(5);

  for (let i = 0; i < words.length; i++) {
    let res = hashTable.add(words[i].replace(/\W+/g, ''), words[i]);

    if (res === 'Key already being used') {
      return words[i];
    }
  }

  return 'No duplicates found';
}

module.exports = repeatedWord;