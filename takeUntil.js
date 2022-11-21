const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = (array, callback) => {
  
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

module.exports = takeUntil;

