'use strict';

function multiBracketValidation(str) {
  if (typeof str !== 'string') return 'Not a valid string';

  let arr = str.split('');
  let compareArr = [];
  let reference = ['(', ')', '[', ']', '{', '}'];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let shift = arr.shift();
    if (reference.includes(shift)) {
      if (shift === '(' || shift === '[' || shift === '{') {
        compareArr.push(shift);
      } else {
        if (shift === ')' && compareArr.pop() !== '(') {
          return false;
        } else if (shift === ']' && compareArr.pop() !== '[') {
          return false;
        } else if (shift === '}' && compareArr.pop() !== '{') {
          return false;
        }
      }
    }
  }
  console.log(arr.length === 0);
  return arr.length === 0;
}

module.exports = multiBracketValidation;

