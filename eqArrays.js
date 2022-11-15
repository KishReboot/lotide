const assertEqual = (actual, expected) => {

  actual !== expected
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};


/*
 * Similar to assertEqual
 * Comparing the length of two arrays to see if the values match (if statement)
 * Then checking if the elements[i] match in the array
 */
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


eqArrays([1, 2, 3], [1, 2, 3]); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

eqArrays([1, 2, 3], [3, 2, 1]); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);