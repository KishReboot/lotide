const assertEqual = (actual, expected) => {

  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected} `);
  } else {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  }

};

/* A function that returns the tail of an array, every element but [0]
 * THIS is where slice() comes in handy, not the previous.
 *
 * originally had just return arr.slice(1);, to test for an array of 1 or less
 */


const tail = (arr) => {
  let results = [];

  if (arr.length <= 1) {

    return results;

  }

  return arr.slice(1);

};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case for 1 element = empty
const oneEle = tail(["Onepunch"]);
assertEqual(oneEle.length, 1);
assertEqual(oneEle[0]);
