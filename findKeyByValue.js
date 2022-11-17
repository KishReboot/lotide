const assertEqual = (actual, expected) => {

  actual !== expected
    ? console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected}`);

};

// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given
// value. If no key with that given value is found, then it should return
// undefined.

const findKeyByValue = (object, value) => {

  for (let key in object) {

    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  animated: "ReBoot",
  fantasy: "The Princess Bride"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "ReBoot"), "animated");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Princess Bride"), "fantasy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);