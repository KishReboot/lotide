const assertArraysEqual = require('./assertArraysEqual');

const middle = (arr) => {
  
  let midVal = Math.floor((arr.length / 2));
  
  if (arr.length < 3) {

    return [];
  
  }

  if (arr.length % 2 !== 0) {

    return [arr[midVal]];
  }
  
  return [arr[midVal - 1], arr[midVal]];

};


module.exports = middle;
  
 
 
