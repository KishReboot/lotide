const eqArrays = (arr1, arr2) => {

  for (let i = 0; i < arr1.length; i++) {

    if (arr1.length !== arr2.length) return false;

    if (arr1[i] !== arr2[i])  return false;

  }
  
  return true;

};

const assertArraysEqual = (actual, expected) => {

  eqArrays(actual, expected) !== true
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};


// The function will return a "slice of the array with elements taken from the
// beginning." It should keep going until the callback/predicate returns a
// truthy value.

// iterate through array until callback finds truthy val

const takeUntil = function(array, callback) {
  
  let results = [];

  for (let arr of array) {

    if (!callback(arr)) {

      results.push(arr);

    } else {

      return results;

    }

  }

  return results;

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual((results1), [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual((results2),["I've", "been", "to", "Hollywood"]);