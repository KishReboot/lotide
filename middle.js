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

/* Implement middle which will take in an array and return the middle-most
 * element(s) of the given array.
 *
 * The middle function should return an array with only the middle element(s)
 * of the provided array. This means that the length of the returned elements
 * could vary.
 */

/* steps
 * (Math.floor(arr.length / 2)) 
 *
 * * If array has 1 or 2 elements, return empty array < 3
 * * If array has an odd number of elements, return the middle value
 * * If array is an even number of elements, return the middle 2 values
 */

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


// TEST CODE
  
// For arrays with one or two elements, there is no middle. Return an empty
// array.
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
 
// For arrays with odd number of elements, an array containing a single middle
// element should be returned.
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
  
// For arrays with an even number of elements, an array containing the two
// elements in the middle should be returned
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
  
 
 
