'use strict';

let leftJoin = (table1, table2) => {
  if (!table1.buckets || !table2.buckets) return 'Not valid tables';

  let results = [];
  let buckets = table1.buckets;

  for (let i = 0; i < buckets.length; i++) {
    let bucket = buckets[i];

    if (bucket) {
      let current = bucket.head;

      while (current) {
        let arr = [];

        let key = current.value[0];

        arr.push(key);
        arr.push(current.value[1]);
        let table2Val = table2.get(key);

        if (table2Val) {
          arr.push(table2Val);
        } else {
          arr.push(null);
        }

        results.push(arr);
        current = current.next;
      }
    }
  }

  return results;
}

module.exports = leftJoin;