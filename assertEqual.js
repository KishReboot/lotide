// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected} `);
  } else {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);
  }

};
/* Test at least the following scenarios:
 * Comparing identical strings
 * Comparing non-identical strings
 * Comparing identical numbers
 * Comparing non-identical numbers
*/

// TEST CODE
assertEqual("Russ", "Russ");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(93, 93);




