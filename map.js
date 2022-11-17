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
const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
assertArraysEqual((results1), ["g", "c", "t", "m", "t"]);
