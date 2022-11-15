// Copy your eqArrays function into this new file.

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

// Instruction
// Implement assertArraysEqual which will take in two arrays and console.log an
// appropriate message to the console.

// The message will be similar to that of assertEqual. In fact, you could refer
// to the code for assertEqual to help you implement this. Instead of doing a
// simple === check though, this assertion function will make use of your
// eqArrays function for array comparison.

/*
const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected) !== true) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  }

};
*/


const assertArraysEqual = (actual, expected) => {

  eqArrays(actual, expected) !== true
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};

assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);