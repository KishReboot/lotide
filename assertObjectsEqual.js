const eqObjects = function(object1, object2) {

  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  
  if (obj1.length === obj2.length) {

    for (let key of obj1) {

      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {

        if (!eqArrays(obj1[key], obj2[key])) {
          
          return false;

        }

      }

    }
    
    return true;

  }
  return false;
};

// Functions that do not return values and instead print out messages to the
// console are more difficult to test using assertions. This is because we
// cannot simply compare their return value to an expected value.

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect; // <= add this line

  eqObjects(actual, expected)
    ? console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
    : console.log(`✔✔✔ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);

};




//✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
const ab = { a: "4", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual((ab, ba), false);

const ac = {a: "2", c: "1"};
const ca = {c: "1", a: "2"};

assertObjectsEqual((ac, ca), true);

