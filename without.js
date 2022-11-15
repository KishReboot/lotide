// Implement without which will return a subset of a given array, removing
// unwanted elements.

// Copy your assertArraysEqual and eqArrays functions into this new file.
const eqArrays = (arr1, arr2) => {

  for (let i = 0; i < arr1.length; i++) {

    if (arr1.length !== arr2.length) {

      return false;

    }

    if (arr1[i] !== arr2[i]) {

      return false;

    }

  }
  
  return true;
};

const assertArraysEqual = (actual, expected) => {

  eqArrays(actual, expected) !== true
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};

// This function should take in a source array and a itemsToRemove array. It
// should return a new array with only those elements from source that are not
// present in the itemsToRemove array.

// (2) Loop through both arrays; 'source' and 'itemsToRemove'
// Compare/check 'source' elements to 'itemsToRemove'
// If 'itemsToRemove[element]' is present in 'source'
// Remove that element from 'source' (splice from source[element])
// Bam new array

const without = (source, itemsToRemove) => {

  for (let i = 0; i < source.length; i++) {

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j])

        source.splice(i, 1);

    }

  }

  return source;

};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

