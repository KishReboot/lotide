const eqArrays = require('./eqArrays');


const assertArraysEqual = (actual, expected) => {

  eqArrays(actual, expected) !== true
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};

module.exports = assertArraysEqual;

