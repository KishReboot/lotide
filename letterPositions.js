// Copy your previously implemented assertArraysEqual and eqArrays functions
// into this file.
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

// This challenge is similar to the countLetters activity and allows us to
// spend some more time solving problems with objects.
// Tips advised regular for loop or a for...of with a 0 counter within the loop
// Similar set up to countLetters

/* Create empty object
 * iterate/loop through the array(sentence[i(characters)])
 *
 *
 */

const letterPositions = (sentence) => {
  
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== " ") {

      if (results !== [sentence[i]]) {
        
        results[sentence[i]] = [];
        results[sentence[i]].push(i);

      } else {

        results[sentence[i]].push(i);
      }
      
      //results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];

    }

  }

  return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [3]);
assertArraysEqual(letterPositions("hello").l, [3]);
assertArraysEqual(letterPositions("hello").o, [4]);

assertArraysEqual(letterPositions("sojourn").s, [0]);
assertArraysEqual(letterPositions("sojourn").o, [3]);
assertArraysEqual(letterPositions("sojourn").j, [2]);
assertArraysEqual(letterPositions("sojourn").o, [3]);
assertArraysEqual(letterPositions("sojourn").u, [4]);

